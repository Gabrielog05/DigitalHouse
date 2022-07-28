CREATE DATABASE Checkpoint02;

USE Checkpoint02;

CREATE TABLE clientes(
	clienteId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	idade INT
);

CREATE TABLE  Vendas (
	vendaId INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	clienteId INT NOT NULL,
	dataVenda DATE,
	FOREIGN KEY (clienteId) REFERENCES clientes (clienteId)
);
  
CREATE TABLE produtos (
	produtoId  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nomeProduto VARCHAR(30) NOT NULL,
	preco DECIMAL NOT NULL
);

CREATE TABLE produtos_venda (
	produtoVendaId  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,	
    vendaId INT NOT NULL,
    produtoId INT NOT NULL,
    quantidade INT,
    valor DECIMAL,
    FOREIGN KEY (produtoId) REFERENCES produtos (produtoId),
    FOREIGN KEY (vendaId) REFERENCES vendas (vendaId)
);
  
INSERT INTO clientes (nome, idade)
VALUES ('John Snow', '23');

INSERT INTO clientes (nome, idade)
VALUES ('Ned Stark', '43');

INSERT INTO clientes (nome, idade)
VALUES ('Sansa Stark', '19');


