-- Exercícios de Fixação dia 21.2 - Normalização de Tabelas

/*Exercício 1: Normalize a tabela a seguir para a 1ª Forma Normal.
Não se preocupe em montar a estrutura em código SQL neste primeiro momento.
Crie apenas uma planilha (Excel, Google Sheets, Open Office Calc ou semelhantes) da estrutura esperada.


Funcionario_id	Nome	 Sobrenome	Contato					 Contato			DataCadastro			Setor
12				Joseph	 Rodrigues	jo@gmail.com			 (35)998552-1445	2020-05-05 08:50:25		Administração, Vendas
13				André	 Freeman	andre1990@gmail.com		 (47)99522-4996		5 de Fevereiro de 2020	Operacional
14				Cíntia	 Duval		cindy@outlook.com		 (33)99855-4669		2020-05-05 10:55:35		Estratégico, Vendas
15				Fernanda Mendes		fernandamendes@yahoo.com (33)99200-1556		2020-05-05 11:45:40		Marketing
*/





CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;

CREATE TABLE IF NOT EXISTS funcionarios (
    funcionario_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS setores (
    setor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    setor VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS funcionarios_setores (
    funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    CONSTRAINT func_set_pk PRIMARY KEY (funcionario_id , setor_id),
    CONSTRAINT FK_func FOREIGN KEY (funcionario_id)
        REFERENCES funcionarios (funcionario_id),
    CONSTRAINT FK_set FOREIGN KEY (setor_id)
        REFERENCES setores (setor_id)
);

CREATE TABLE IF NOT EXISTS contatos (
    funcionario_id INT NOT NULL,
    FOREIGN KEY (funcionario_id)
        REFERENCES funcionarios (funcionario_id),
    email VARCHAR(80),
    telefone VARCHAR(15)
);

CREATE TABLE IF NOT EXISTS cadastros (
    funcionario_id INT NOT NULL,
    FOREIGN KEY (funcionario_id)
        REFERENCES funcionarios (funcionario_id),
    data_cadastro VARCHAR(50) NOT NULL,
    hora_cadastro VARCHAR(50)
);

INSERT INTO funcionarios(nome, sobrenome)
VALUES('Joseph', 'Rodrigues'),
('André', 'Freeman'),
('Cíntia', 'Duval'),
('Fernanda', 'Mendes');

INSERT INTO setores(setor)
VALUES('Administração'),
('Vendas'),
('Operacional'),
('Estratégico'),
('Marketing');

DROP TABLE IF EXISTS cadastros;

INSERT INTO funcionarios_setores(funcionario_id, setor_id) VALUES(1, 1),
(1, 2),
(2, 3),
(3, 4),
(3, 2),
(4, 5);

INSERT INTO contatos(funcionario_id, email, telefone) VALUES (1, 'jo@gmail.com', '(35)998552-1445'),
(2, 'andre1990@gmail.com', '(47)99522-4996'),
(3, 'cindy@outlook.com', '(33)99855-4669'),
(4, 'fernandamendes@yahoo.com', '(33)99200-1556');

INSERT INTO cadastros(funcionario_id, data_cadastro, hora_cadastro) VALUES (1, '2020-05-05', '08:50:25' ),
(2, '2020-05-05',''),
(3, '2020-05-05','10:55:35'),
(4, '2020-05-05','11:45:40');