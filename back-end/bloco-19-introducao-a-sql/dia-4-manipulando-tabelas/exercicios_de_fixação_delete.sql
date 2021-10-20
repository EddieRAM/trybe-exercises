# Exercícios de Fixação dia 19.4 - DELETE

SELECT * FROM sakila.actor;
SELECT * FROM film_actor;
SELECT * FROM film_text;

# 1. Exclua do banco de dados o ator com o nome de "KARL".
DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'Karl';

# 2. Exclua do banco de dados os atores com o nome de "MATTHEW".
SELECT * FROM sakila.actor
WHERE first_name = 'Matthew';

SELECT * FROM sakila.film_actor
WHERE actor_id IN ('8', '103', '181');

DELETE FROM sakila.film_actor
WHERE actor_id IN ('8', '103', '181');

DELETE FROM sakila.actor
WHERE first_name = 'Matthew';

# 3. Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
SELECT * FROM sakila.film_text
WHERE `description` LIKE '%saga%';

DELETE FROM sakila.film_text
WHERE `description` LIKE '%saga%';

# 4. Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;

# 5. Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas
-- em cada uma. Use o Table Inspector para fazer isso (aba DDL).
-- > Concluí que uma tabela deve ter tantas restrições ON DELETE quanto o número de FKs que recebe e é o "1" da relação 1:N ou N:1.

# 6. Exclua o banco de dados e o recrie (use as instruções no início desta aula).

