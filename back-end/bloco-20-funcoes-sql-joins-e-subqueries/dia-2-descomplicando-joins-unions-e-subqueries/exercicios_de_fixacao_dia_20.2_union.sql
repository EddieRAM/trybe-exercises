# Exercícios de Fixação dia 20.2 - UNION

# 1. Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor,
-- exibindo apenas o nome e o sobrenome . Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
SELECT * FROM sakila.actor;
SELECT * FROM sakila.staff;

SELECT first_name, last_name FROM sakila.actor
UNION ALL
SELECT first_name, last_name FROM sakila.staff;

# 2. Monte uma query que una os resultados das tabelas customer e actor , exibindo os nomes que contêm a palavra "tracy" na
-- tabela customer e os que contêm "je" na tabela actor . Exiba apenas os resultados únicos.
SELECT * FROM sakila.customer;
SELECT * FROM sakila.actor;

SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM sakila.customer
WHERE first_name LIKE '%tracy%'
OR last_name LIKE '%tracy%'
UNION
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM sakila.actor
WHERE first_name LIKE '%je%'
OR last_name LIKE '%je%';


# 3. Monte uma query que exiba a união dos cinco últimos nomes da tabela actor , o primeiro nome da tabela staff e cinco
-- nomes a partir da 15ª posição da tabela customer . Não permita que dados repetidos sejam exibidos. Ordene os resultados
-- em ordem alfabética.
SELECT * FROM sakila.actor;
SELECT * FROM sakila.staff;
SELECT * FROM sakila.customer;

(SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM sakila.actor
ORDER BY first_name DESC
LIMIT 5)
UNION
(SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM sakila.staff
ORDER BY first_name ASC
LIMIT 1)
UNION
(SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM sakila.customer
LIMIT 5
OFFSET 15);

# 4. Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem
-- alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. 
-- Monte uma query que simule esse cenário.
SELECT * FROM sakila.customer;
SELECT * FROM sakila.actor;

(SELECT first_name, last_name FROM sakila.customer)
UNION ALL
(SELECT first_name, last_name FROM sakila.actor)
ORDER BY first_name
LIMIT 15
OFFSET 60;