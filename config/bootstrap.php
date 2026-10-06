<?php

require_once __DIR__ . '/../vendor/autoload.php';

$routes = require __DIR__ . '/routes.php';
$pageContent = require __DIR__ . '/page-content.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();