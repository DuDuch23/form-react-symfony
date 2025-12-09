composer i
php bin/console doctrine:database:create
php bin/console lexik:jwt:generate-keypair
symfony console doctrine:migrations:migrate