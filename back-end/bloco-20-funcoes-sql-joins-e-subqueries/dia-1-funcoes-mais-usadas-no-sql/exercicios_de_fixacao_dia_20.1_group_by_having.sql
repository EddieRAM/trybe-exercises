# Exercícios dia 20.1 - GROUP BY

SELECT * FROM sakila.customer;
# 1. Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer
-- que estão ativos e a quantidade que estão inativos.
SELECT `active`, COUNT(*)
FROM sakila.customer
GROUP BY `active`;

# 2. Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e
--  inativos por loja. Os resultados devem conter o ID da loja , o status dos clientes (ativos ou inativos) e
-- a quantidade de clientes por status.
SELECT store_id, `active`, COUNT(*) AS quantity_of_customers
FROM sakila.customer
GROUP BY store_id, `active`
ORDER BY store_id;

# 3. Monte uma query que exiba a média de duração de locação por classificação indicativa ( rating ) dos filmes
-- cadastrados na tabela sakila.film . Os resultados devem ser agrupados pela classificação indicativa e ordenados
-- da maior média para a menor.
SELECT * FROM sakila.film;
SELECT rating, AVG(length) AS average_length
FROM sakila.film
GROUP BY rating
ORDER BY average_length DESC;

# 4. Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços
-- registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT district, COUNT(address) AS addresses_in_district
FROM sakila.address
GROUP BY district
ORDER BY addresses_in_district DESC;

-- --------------------------------------------------------------------------------------------------------------------------------

# 1. Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. 
-- Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query 
-- mais legível. Finalize ordenando os resultados de forma decrescente.
    SELECT rating, AVG(length) AS average_length
    FROM sakila.film
    GROUP BY rating
    HAVING average_length BETWEEN 115.0 AND 121.50
    ORDER BY average_length DESC;
    
# 2. Usando a query a seguir, exiba apenas os valores de custo de substituição que estão acima de
--  $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query
--  mais legível. Finalize ordenando os resultados de forma crescente.
    SELECT rating, SUM(replacement_cost) AS total_replacement_cost
    FROM sakila.film
    GROUP BY rating
    HAVING total_replacement_cost > 3950.50
    ORDER BY total_replacement_cost;


