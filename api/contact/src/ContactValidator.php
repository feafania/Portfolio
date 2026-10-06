<?php

final class ContactValidator
{
    private const FIELDS = ['first-name', 'last-name', 'email', 'phone', 'subject', 'message'];

    private const CONTACT_LIMITS = [
                'first-name'      => 50,
                'last-name'      => 50,
                'email'   => 254,
                'subject' => 150,
                'message'   => 2000,
            ];

    public static function sanitize(array $input): array
    {
        $clean = [];

        foreach (self::FIELDS as $field) {
            $value = $input[$field] ?? '';
            $value = is_string($value) ? $value : '';

            if (!mb_check_encoding($value, 'UTF-8')) {
                $value = '';
            }

            $value = trim(strip_tags($value));
            $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';

            if ($field !== 'message') {
                $value = preg_replace('/\s+/u', ' ', $value) ?? ''; //replace multiple spaces to one
            }

            $clean[$field] = $value;
        }

        return $clean;
    }

    public static function validate(array $d): array
    {
        $errors = [];

        if ($d['first-name'] === '') {
            $errors['first-name'] = 'Please enter your first name.';
        } elseif (mb_strlen($d['first-name']) > self::CONTACT_LIMITS['first-name']) {
            $errors['first-name'] = 'First name must be 50 characters or fewer.';
        }

        if ($d['last-name'] === '') {
            $errors['last-name'] = 'Please enter your last name.';
        } elseif (mb_strlen($d['last-name']) > self::CONTACT_LIMITS['last-name']) {
            $errors['last-name'] = 'Last name must be 50 characters or fewer.';
        }

        if (
            $d['email'] === ''
            || mb_strlen($d['email']) > self::CONTACT_LIMITS['email']
            || !filter_var($d['email'], FILTER_VALIDATE_EMAIL)
        ) {
            $errors['email'] = 'Please enter a valid email address.';
        }

        if ($d['phone'] !== '' && !preg_match('/^\+?[0-9\s\-()]{7,20}$/', $d['phone'])) {
            $errors['phone'] = 'Please enter a valid phone number (01603 515007, +44 1603 515007).';
        }

        if (mb_strlen($d['subject']) > self::CONTACT_LIMITS['subject']) {
            $errors['subject'] = 'Subject must be 150 characters or fewer.';
        }

        if ($d['message'] === '') {
            $errors['message'] = 'Please enter a message.';
        } elseif (mb_strlen($d['message']) > self::CONTACT_LIMITS['message']) {
            $errors['message'] = 'Message must be 2000 characters or fewer.';
        }

        return $errors;
    }
}