# Exercicios de Fixação dia 20.3 - Stored Procedures

# 1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes.
--  Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id
--  do ator ou atriz e a quantidade de filmes em que atuaram.
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.actor;

USE sakila;
DELIMITER $$

DROP PROCEDURE IF EXISTS ShowTop10Actors;

CREATE PROCEDURE ShowTop10Actors()
BEGIN
SELECT CONCAT(a.first_name, ' ', a.last_name) AS actor_name, fa.actor_id, COUNT(fa.actor_id) AS roles_played 
FROM sakila.film_actor fa
INNER JOIN sakila.actor a
ON fa.actor_id = a. actor_id
    GROUP BY fa.actor_id
    ORDER BY roles_played DESC
    LIMIT 10;
END $$

DELIMITER ;

-- Como usar:

CALL ShowTop10Actors();

# 2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string
-- e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada.
-- Use as tabelas film , film_category e category para montar essa procedure.
SELECT * FROM sakila.film; -- film_id, title
SELECT * FROM sakila.film_category; -- [film_id], [category_id]
SELECT * FROM sakila.category; -- category_id, name



USE sakila;
DELIMITER $$

DROP PROCEDURE IF EXISTS ShowFilmWithString;

CREATE PROCEDURE ShowFilmWithString(IN syllable VARCHAR(100))
BEGIN
    SELECT f.film_id, f.title, fc.category_id, c.`name` AS category_name FROM sakila.film f
    INNER JOIN sakila.film_category fc
    ON f.film_id = fc.film_id
    INNER JOIN sakila.category c
    ON fc.category_id = c.category_id
    WHERE `name` LIKE CONCAT('%', syllable, '%');
END $$

DELIMITER ;

-- Como usar:

CALL ShowFilmWithString('ion');

# 3. Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente
--  está ou não ativo, através de um parâmetro de saída.