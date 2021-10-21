# Exercícios de Fixação dia 20.2 - INNER JOIN

# 1. Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor.
SELECT * FROM sakila.actor; -- [actor_id], first_name, last_name
SELECT * FROM sakila.film_actor; -- film_id

SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS actor_name, f.film_id
FROM sakila.actor a
INNER JOIN film_actor f
ON a.actor_id = f.actor_id;

# 2. Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT * FROM sakila.staff; -- first_name, last_name
SELECT * FROM sakila.address; -- address, [address_id]

SELECT s.first_name, s.last_name, a.address
FROM sakila.staff s
INNER JOIN address a
ON s.address_id = a.address_id;

# 3. Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com
--  o id do endereço e o endereço onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT * FROM sakila.customer; -- customer_id, first_name, last_name
SELECT * FROM sakila.address; -- [address_id], address

SELECT c.customer_id, CONCAT(c.first_name, ' ', c.last_name) AS customer_name, c.email, a.address_id, a.address
FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

# 4. Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm
--  "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
SELECT * FROM sakila.address; -- address2
SELECT * FROM sakila.customer; -- first_name, last_name, email, [address_id], address



SELECT CONCAT(c.first_name, ' ', c.last_name) AS customer_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id
WHERE district = 'California'
AND CONCAT(c.first_name, c.last_name) LIKE '%rene%';

# 5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente.
--  Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
SELECT * FROM sakila.address; -- address2
SELECT * FROM sakila.customer; -- first_name, last_name, active, [address_id], address

SELECT CONCAT(c.first_name, ' ', c.last_name) AS customer_name, COUNT(a.address + a.address2) AS registered_addresses
FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id
WHERE c.`active` = TRUE
GROUP BY c.customer_id
ORDER BY c.first_name DESC;

# 6. Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas
--  payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT * FROM sakila.payment; -- amount, payment_date
SELECT * FROM sakila.staff; -- first_name, last_name, [staff_id]

SELECT CONCAT(s.first_name, ' ', s.last_name) AS staff_name, AVG(p.amount) AS average_payment
FROM sakila.staff s
INNER JOIN sakila.payment p
ON s.staff_id = p.staff_id
WHERE p.payment_date LIKE '%2006%'
GROUP BY CONCAT(s.first_name, ' ', s.last_name);

# 7. Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film.
--  Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT * FROM sakila.actor; -- first_name, last_name
SELECT * FROM sakila.film_actor; -- actor_id, film_id
SELECT * FROM sakila.film; -- title

SELECT fa.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS actor_name, fa.film_id, f.title
FROM sakila.actor a
INNER JOIN sakila.film_actor fa
ON fa.actor_id = a.actor_id
INNER JOIN sakila.film f
ON f.film_id = fa.film_id;

