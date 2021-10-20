# Exercícios de Fixação 19.4

SELECT * FROM sakila.staff;

# 1. Insira um novo funcionário na tabela sakila.staff .
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector".
-- Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados
-- automaticamente não precisam ser inseridos manualmente. Boa explorada!
INSERT IGNORE INTO staff (first_name, last_name, address_id, store_id, `active`, username)
VALUES ('Eduardo', 'Sá Carneiro', 3, 2, 1, 'Eduardo');

# 2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT IGNORE INTO staff (first_name, last_name, address_id, store_id, `active`, username) VALUES
('Joaquin', 'Teixeira', 5, 1, 1, 'Vô'),
('Olavo', 'Tem Razão', 8, 2, 1, 'Olavão');

DELETE FROM sakila.staff
WHERE staff_id = 8;

# 3. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como
-- atores na tabela sakila.actor.
INSERT IGNORE INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer
ORDER BY customer_id
LIMIT 5;

SELECT * FROM sakila.category;

# 4. Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT IGNORE INTO sakila.category(name) VALUES
('RPG'),
('Fight'),
('Souls Like'),
('Plattform'),
('FPS');

# 5. Cadastre uma nova loja na tabela sakila.store.
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (4, 3);
