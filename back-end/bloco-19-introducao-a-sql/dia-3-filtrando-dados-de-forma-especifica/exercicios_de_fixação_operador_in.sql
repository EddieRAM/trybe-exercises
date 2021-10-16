#Exercícios de Fixação - Operador IN

# 1. Como você faria, então, para encontrar, usando o IN , todos os detalhes sobre o aluguel dos
-- clientes com os seguintes ids: 269, 239, 126, 399, 142? As informações podem ser encontradas na tabela payment.
SELECT * FROM sakila.payment
WHERE customer_id IN (269, 239, 126, 399, 142);

# 2. Como encontraria todas as informações sobre os endereços que estão registrados nos distritos 
-- de QLD, Nagasaki, California, Attika, Mandalay, Nantou e Texas? As informações podem ser encontradas na tabela address.
SELECT * FROM sakila.address
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');