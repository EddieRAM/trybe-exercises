#	Exercícios dia 21.3 - CLONE, VIEW, ALTER, DROP and INDEX

/*	1. Crie uma view chamada film_with_categories utilizando as tabelas category, film_category e film do
 banco de dados sakila. Essa view deve exibir o título do filme, o id da categoria e o nome da categoria,
 conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.*/
 SELECT * FROM sakila.category; -- [category_id], name
 SELECT * FROM sakila.film_category; -- [film_id], [category_id]
 SELECT * FROM sakila.film; -- [film_id], title, 
 
 USE sakila;
CREATE VIEW film_with_categories AS
    SELECT 
        f.title, fc.category_id, c.`name`
    FROM
        sakila.film f
            INNER JOIN
        sakila.film_category fc ON f.film_id = fc.film_id
            INNER JOIN
        sakila.category c ON fc.category_id = c.category_id
    ORDER BY title;
    
SELECT * FROM sakila.film_with_categories;
 
 /*	2. Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila.
 Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o
 título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir
 como referência.*/
 SELECT * FROM sakila.actor; -- [actor_id], first_name, last_name
 SELECT * FROM sakila.film_actor; -- [actor_id], [film_id]
 SELECT * FROM sakila.film; -- [film_id], title
 
USE sakila;
CREATE VIEW film_info AS
    SELECT 
        fa.actor_id,
        CONCAT(a.first_name, ' ', a.last_name) AS 'actor',
        f.title
    FROM
        sakila.film f
            INNER JOIN
        sakila.film_actor fa ON f.film_id = fa.film_id
            INNER JOIN
        sakila.actor a ON fa.actor_id = a.actor_id
    ORDER BY CONCAT(a.first_name, ' ', a.last_name);
    
SELECT * FROM sakila.film_info;
    
/*	3. Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila.
 Sua view deve exibir o address_id , o address , o district , o city_id e a city . Os resultados devem
 ser ordenados pelo nome das cidades. Use a imagem abaixo como referência.*/
 SELECT * FROM sakila.address; -- [city_id], address_id, address, district
 SELECT * FROM sakila.city; -- [city_id], city
 
 USE sakila;
CREATE VIEW address_info AS
    SELECT 
        a.address_id, a.address, a.district, a.city_id, c.city
    FROM
        sakila.address a
            INNER JOIN
        sakila.city c ON a.city_id = c.city_id
    ORDER BY c.city;

SELECT * FROM sakila.address_info;

/*	4. Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila.
 Sua view deve exibir o título do filme , o id do idioma e o idioma do filme , como na imagem a seguir.*/
 SELECT * FROM sakila.film; -- [language_id], title
 SELECT * FROM sakila.`language`; -- [language_id], name
 
 USE sakila;
CREATE VIEW movie_languages AS
    SELECT 
        f.title, l.language_id, l.`name` AS `language`
    FROM
        sakila.film f
            INNER JOIN
        sakila.`language` l ON f.language_id = l.language_id;
 
 SELECT * FROM sakila.movie_languages;
 
 #	Desafios sobre INDEX
 
 /*	1. Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ), adicionando-o na
 coluna name . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan , como
 já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e
 mensure novamente esse custo.*/
 
CREATE FULLTEXT INDEX name_index ON sakila.category(`name`);

-- Após ter criado o índice, mensure o custo com a seguinte query:

SELECT 
    *
FROM
    sakila.category
WHERE
    MATCH (name) AGAINST ('action' );
 
-- QUERY COST (using a FULLTEXT INDEX) = 0.35
 
DROP INDEX name_index ON sakila.category;

-- Após ter excluído o índice, mensure o custo com a seguinte query:

SELECT 
    *
FROM
    sakila.category
WHERE
    name LIKE '%action%';

-- QUERY COST (without using a FULLTEXT INDEX) = 1.85

/*	2. Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o na coluna postal_code.
 Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições
 anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.*/

CREATE INDEX postal_code_index ON sakila.address(postal_code);

-- Mensure o custo com a seguinte query:

SELECT 
    *
FROM
    sakila.address
WHERE
    postal_code = '36693';
    
-- QUERY COST (using INDEX) = 0.35

DROP INDEX postal_code_index ON sakila.address;

-- QUERY COST (without using INDEX) = 61.80

#	Desafios sobre ALTER TABLE

/*	1. Escreva uma query SQL para alterar na tabela locations o nome da coluna street_address para address, mantendo o
 mesmo tipo e tamanho de dados.*/
SELECT * FROM hr.locations;

ALTER TABLE hr.locations RENAME COLUMN STREET_ADDRESS TO ADDRESS;

SHOW COLUMNS FROM hr.locations;

/*	2. Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e tamanho de
 dados.*/
SELECT * FROM hr.regions;

ALTER TABLE hr.regions RENAME COLUMN REGION_NAME TO REGION;

SHOW COLUMNS FROM hr.regions;
 
/*	3. Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o mesmo tipo e tamanho
 de dados.*/
SELECT * FROM hr.countries;

ALTER TABLE hr.countries RENAME COLUMN COUNTRY_NAME TO COUNTRY;

SHOW COLUMNS FROM hr.countries;
 
 
 
 
 
 
 
 
 