-- Exercicio de Fixação - dia 21.1 - Criação de Tabelas

CREATE DATABASE Albuns;

DROP DATABASE IF EXISTS Albuns;

USE Albuns;

CREATE TABLE estilos_musicais (
estilo_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR (50) NOT NULL
);

CREATE TABLE artistas(
artista_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR (50) NOT NULL
);

CREATE TABLE albuns (
    album_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    artista_id INT NOT NULL,    
    nome_album VARCHAR(100) NOT NULL,
    preco DECIMAL(5 , 2 ),
    FOREIGN KEY (artista_id)
        REFERENCES artistas (artista_id)    
);

CREATE TABLE cancoes (
    cancao_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    artista_id INT NOT NULL,
    estilo_id INT NOT NULL,
    FOREIGN KEY (artista_id)
        REFERENCES artistas (artista_id),
    FOREIGN KEY (estilo_id)
        REFERENCES estilo_musicais (estilo_id)
);

INSERT INTO artistas(nome)
 VALUES('Jason Seiler'),
 ('Bobby Chiu'),
 ('Marco Bucci'),
 ('Cesar Santos');
 
 INSERT INTO estilos_musicais(nome)
 VALUES('Caricatura Progressiva'),
 ('Monstros Paulera'),
 ('Bossa Pintada'),
 ('Forro Retrato');
 
 DROP TABLE IF EXISTS albuns;
 
 INSERT INTO cancoes(nome, artista_id, estilo_id)
 VALUES('Boina', 1, 3),
 ('Pincel', 2, 4),
 ('Tinta Azul', 4, 1),
 ('Tinta Vermelha', 2, 3),
 ('Tinta Verde', 3, 4),
 ('Inspiracao', 4, 2),
 ('Perspectiva', 1, 3),
 ('Motivo', 4, 3),
 ('Paleta', 3, 1),
 ('Avental', 2, 4);
 
 INSERT INTO albuns(nome_album, artista_id, preco)
 VALUES('Deviantart', 1, 15.00),
 ('Artstation', 3, 20.00),
 ('Instagram', 4, 100.00),
 ('Behance', 2, 49.90 );
 

