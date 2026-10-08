<?php

use PHPMailer\PHPMailer\PHPMailer;

final class ContactMailer
{
    public static function send(array $d): void
    {
        foreach (['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'MAIL_FROM', 'MAIL_TO'] as $key) {
            if (empty($_ENV[$key])) {
                throw new RuntimeException("Missing env variable: $key");
            }
        }

        $fullName = $d['first-name'] . ' ' . $d['last-name'];
        $phone    = $d['phone'] !== '' ? $d['phone'] : '—';
        $subject  = $d['subject'] !== ''
            ? 'Portfolio contact: ' . $d['subject']
            : 'New contact form submission from ' . $fullName;

        $mail = new PHPMailer(true);

        $mail->isSMTP();
        $mail->Host       = $_ENV['SMTP_HOST'];
        $mail->Port       = (int) $_ENV['SMTP_PORT']; // 2525
        $mail->SMTPAuth   = true;
        $mail->Username   = $_ENV['SMTP_USER'];
        $mail->Password   = $_ENV['SMTP_PASS'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Timeout    = 10;
        $mail->CharSet    = 'UTF-8';

        $mail->setFrom($_ENV['MAIL_FROM'], 'Portfolio Contact Form');
        $mail->addAddress($_ENV['MAIL_TO']);
        $mail->addReplyTo($d['email'], $fullName);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = self::htmlBody($d, $fullName, $phone);
        $mail->AltBody = "Name: $fullName\n"
                       . "Email: {$d['email']}\n"
                       . "Phone: $phone\n"
                       . "Subject: " . ($d['subject'] !== '' ? $d['subject'] : '—') . "\n\n"
                       . $d['message'];

        $mail->send();
    }

    private static function htmlBody(array $d, string $fullName, string $phone): string
    {
        $e = static fn(string $s): string => htmlspecialchars($s, ENT_QUOTES, 'UTF-8');

        $subject = $d['subject'] !== '' ? $d['subject'] : '—';

        return '<h2>New contact form submission</h2>'
            . '<p><strong>Name:</strong> '    . $e($fullName)   . '</p>'
            . '<p><strong>Email:</strong> '   . $e($d['email']) . '</p>'
            . '<p><strong>Phone:</strong> '   . $e($phone)      . '</p>'
            . '<p><strong>Subject:</strong> ' . $e($subject)    . '</p>'
            . '<p><strong>Message:</strong><br>' . nl2br($e($d['message'])) . '</p>';
    }
}