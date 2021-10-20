# Exercícios dia 19.4 - Bônus

SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;

SET SQL_SAFE_UPDATES = 0;

# 1. Exercício 8 : Altere a classificação da tabela BoxOffice para 9.0 de todos os filmes que lucraram mais de
-- 400 milhões no mercado interno.
UPDATE Pixar.BoxOffice
SET rating = 9.0
WHERE domestic_sales > 400000000;

# 2. Exercício 9 : Altere a classificação da tabela BoxOffice para 6.0 de todos os filmes que lucraram
-- menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.
UPDATE Pixar.BoxOffice
SET rating = 6.0
WHERE international_sales < 300000000 AND
domestic_sales > 200000000;

# 3. Exercício 10 : Exclua da tabela Movies todos os filmes com menos de 100 minutos de duração.
SELECT id, length_minutes FROM Pixar.Movies
WHERE length_minutes < 100;

DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (1, 6, 7, 8);

DELETE FROM Pixar.Movies
WHERE length_minutes < 100;