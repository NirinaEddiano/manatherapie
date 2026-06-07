-- Script de migration : Verrouillage de compte après tentatives échouées
-- À exécuter UNE SEULE FOIS dans la base de données

ALTER TABLE users
  ADD COLUMN IF NOT EXISTS failed_login_attempts INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS locked_until TIMESTAMPTZ;

-- Réinitialiser les verrouillages existants
UPDATE users SET failed_login_attempts = 0, locked_until = NULL;

-- Vérification
SELECT column_name, data_type FROM information_schema.columns
WHERE table_name = 'users'
  AND column_name IN ('failed_login_attempts', 'locked_until');
