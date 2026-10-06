<?php
/** @var PDO $pdo */
declare(strict_types=1); // do not transform types

require_once __DIR__ . '/../../config/bootstrap.php';
require_once __DIR__ . '/src/ContactValidator.php';
require_once __DIR__ . '/src/ContactMailer.php';

header('Content-Type: application/json; charset=utf-8');

function respond(int $status, array $payload): never
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

const SUCCESS_MESSAGE = 'Thank you! Your message has been sent.';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['success' => false, 'message' => 'Method not allowed.']);
}

// Honeypot: bot filled every field
if (!empty($_POST['website'])) {
    respond(200, ['success' => true, 'message' => SUCCESS_MESSAGE]);
}

$data   = ContactValidator::sanitize($_POST);
$errors = ContactValidator::validate($data);

// Unprocessable Content
if ($errors) {
    respond(422, [
        'success' => false,
        'message' => 'Please correct the errors below.',
        'errors'  => $errors,
    ]);
}

require_once __DIR__ . '/../../config/database.php';

$ip = $_SERVER['REMOTE_ADDR'] ?? null;

try {
    // rate-limit: 5 in 1 hour
    if ($ip !== null) {
        $stmt = $pdo->prepare(
            'SELECT COUNT(*) FROM contact_submissions
             WHERE ip_address = :ip AND created_at > (NOW() - INTERVAL 1 HOUR)'
        );
        $stmt->execute([':ip' => $ip]);

        // Too Many Requests
        if ((int) $stmt->fetchColumn() >= 5) {
            respond(429, [
                'success' => false,
                'message' => 'Too many submissions. Please try again later.',
            ]);
        }
    }

    $stmt = $pdo->prepare(
        'INSERT INTO contact_submissions
           (first_name, last_name, email, phone, subject, message, ip_address)
         VALUES
           (:first_name, :last_name, :email, :phone, :subject, :message, :ip)'
    );
    $stmt->execute([
        ':first_name' => $data['first-name'],
        ':last_name'  => $data['last-name'],
        ':email'      => $data['email'],
        ':phone'      => $data['phone']   !== '' ? $data['phone']   : null,
        ':subject'    => $data['subject'] !== '' ? $data['subject'] : null,
        ':message'    => $data['message'],
        ':ip'         => $ip,
    ]);

    $submissionId = (int) $pdo->lastInsertId();
} catch (Throwable $e) {
    error_log('Contact form DB error: ' . $e->getMessage());
    respond(500, [
        'success' => false,
        'message' => 'Something went wrong. Please try again later.',
    ]);
}

try {
    ContactMailer::send($data);

    $pdo->prepare('UPDATE contact_submissions SET email_sent = 1 WHERE id = :id')
        ->execute([':id' => $submissionId]);
} catch (Throwable $e) {
    error_log('Contact form mail error: ' . $e->getMessage());
}

respond(200, ['success' => true, 'message' => SUCCESS_MESSAGE]);