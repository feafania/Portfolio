# Portfolio – Tatsiana Kashko

A responsive personal portfolio website built with **PHP**, **SCSS** and **jQuery**. It showcases my projects, coding examples and information about my work, and includes a contact form with client-side and server-side validation, database storage and email notifications.

**Live site:** https://tatsiana-kashko.netmatters-scs.co.uk

## ✨ Features

- Responsive mobile-first layout
- Accessible navigation (keyboard support, ARIA attributes, visible focus states)
- Semantic HTML5 markup
- Modular SCSS architecture (BEM)
- Portfolio cards with zoom view, loaded from a PHP config array
- Coding examples page with syntax highlighting and a copy button
- Contact form:
    - client-side validation (jQuery) with all errors shown at once
    - server-side validation and input cleansing (PHP)
    - submissions saved to MySQL using PDO prepared statements
    - email notification via SMTP (PHPMailer)
    - honeypot field and simple rate limiting against spam
- Smooth scrolling navigation
- Optimised for performance (WebP images, minified jQuery, cache headers)
- Sitemap and robots.txt for search engines

## 🛠️ Technologies

- PHP 8
- MySQL / MariaDB (PDO)
- JavaScript (ES modules), jQuery
- SCSS (Sass), CSS Flexbox and Grid
- PHPMailer, vlucas/phpdotenv (Composer)
- highlight.js
- Git and GitHub

## 📁 Project structure

```
├── about/, coding-examples/, scs-scheme/   Page templates
├── api/contact/                            Contact form endpoint
│   ├── index.php
│   ├── src/                                ContactValidator, ContactMailer
│   └── database/schema.sql                 Database table
├── assets/                                 Images and icons
├── config/                                 Bootstrap, routes, projects, code examples, database
├── css/                                    Compiled CSS
├── includes/                               Shared PHP partials (menu, footer, hero)
├── js/                                     JavaScript modules
└── sass/                                   SCSS source files
```

## 🚀 Getting Started

### Requirements

- PHP 8.1+
- Composer
- Node.js and npm (for Sass)
- MySQL or MariaDB

### Installation

Clone the repository:

```bash
git clone https://github.com/feafania/Portfolio.git
cd Portfolio
```

Install dependencies:

```bash
composer install
npm install
```

Create the environment file and fill in your values:

```bash
cp .env.example .env
```

```
DB_HOST=localhost
DB_NAME=
DB_USER=
DB_PASSWORD=

SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=
SMTP_PASS=
MAIL_FROM=
MAIL_TO=
```

Create the database table by running `api/contact/database/schema.sql` (phpMyAdmin or the command line):

```bash
mysql -u USER -p DB_NAME < api/contact/database/schema.sql
```

Compile SCSS:

```bash
npx sass --watch sass/main.scss css/main.css
```

Start the local server and open http://localhost:8000:

```bash
php -S localhost:8000
```

> The `.env` file contains credentials and must **never** be committed.
> For local testing, [Mailtrap](https://mailtrap.io) Sandbox catches all emails in a virtual inbox instead of sending them.

## 🌐 Deployment (cPanel)

1. Upload the project files (without `.env`, `node_modules` and `vendor`).
2. Run `composer install --no-dev` on the server.
3. Create a database and user, then run `schema.sql` in phpMyAdmin.
4. Create `.env` on the server with the production database and SMTP credentials (port `2525`, STARTTLS).
5. Add the protection rules to the end of the existing `.htaccess`, below the cPanel-generated block.
6. Check that `/.env` and `/config/database.php` return 404.

## 📱 Responsive Design

The website is optimised for mobile devices, tablets, laptops and desktop screens.

## ♿ Accessibility

- Semantic HTML and a valid heading structure
- Keyboard navigation
- Visible focus states
- ARIA attributes where appropriate
- Sufficient colour contrast
- Validated with the W3C validator and Lighthouse

## 📬 Contact

**Tatsiana Kashko**

- Email: *t.kashko@gmail.com*
- LinkedIn: *https://www.linkedin.com/in/tatsiana-kashko*
- GitHub: *https://github.com/feafania*

---

*Thank you for visiting my portfolio!*