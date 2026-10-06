CREATE TABLE IF NOT EXISTS contact_submissions (
                                                   id          INT UNSIGNED NOT NULL AUTO_INCREMENT,
                                                   first_name  VARCHAR(50)  NOT NULL,
    last_name   VARCHAR(50)  NOT NULL,
    email       VARCHAR(254) NOT NULL,
    phone       VARCHAR(20)  NULL,
    subject     VARCHAR(150) NULL,
    message     TEXT         NOT NULL,
    ip_address  VARCHAR(45)  NULL,
    email_sent  TINYINT(1)   NOT NULL DEFAULT 0,
    created_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY idx_ip_created (ip_address, created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;