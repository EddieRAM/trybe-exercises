# Exercícios de Fixação dia 20.2 - EXISTS

# 1. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT * FROM hotel.Books_Lent;
SELECT * FROM hotel.Books;

-- verifica a correspondência das IDs dos livros nas duas tabelas e retorna os dados pedidos da primeira (todos os livros)
-- que não existem na segunda (livros alugados).

-- obs: a subquery trata a query principal como tabela externa

SELECT Id, Title  FROM hotel.Books AS b
WHERE NOT EXISTS (
	SELECT * FROM hotel.Books_Lent 
    WHERE book_id = b.ID );

# 2. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que
--  contêm a palavra "lost" no título.
SELECT * FROM hotel.Books_Lent;
SELECT * FROM hotel.Books; -- ID, Title

SELECT ID, Title FROM hotel.Books b
WHERE EXISTS (
SELECT * FROM hotel.Books_Lent
WHERE b.Id = book_id
HAVING b.Title LIKE '%LOST%');

# 3. Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT * FROM hotel.CarSales;
SELECT * FROM hotel.Customers;

SELECT `Name` FROM hotel.Customers c
WHERE NOT EXISTS (
SELECT * FROM hotel.CarSales
WHERE c.CustomerID = CustomerID);

# 4. Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente
--  e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT * FROM hotel.Cars; -- Name, ID (CarID)
SELECT * FROM hotel.CarSales; -- [CarID], [CustomerID]
SELECT * FROM hotel.Customers; -- Name, CustomerId (CustomerID)

SELECT c.`Name`, cu.`Name` FROM hotel.Cars c
INNER JOIN hotel.Customers cu
WHERE EXISTS (
SELECT * FROM hotel.CarSales cs
WHERE cu.CustomerID = cs.CustomerID
AND c.ID = cs.CarID);

