# Exercícios de Fixação - 20.1 - Manipulação de Strings


# 1. Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT UCASE('trybe');

# 2. Faça uma query que transforme a frase 'Você já ouviu falar do Google?' em 'Você já ouviu falar do DuckDuckGo?'.
SELECT REPLACE('Você já ouviu falar do Google?', 'Google', 'DuckDuckGo');

# 3. Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer'.
SELECT CHAR_LENGTH('Uma frase qualquer'); -- 18

# 4. Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas'.
SELECT REPLACE('A linguagem JavaScript está entre as mais usadas', ' JavaScript', '');

SELECT CHAR_LENGTH('A linguagem'); -- 11
SELECT CHAR_LENGTH('JavaScript'); -- 10

SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

# 5. Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
