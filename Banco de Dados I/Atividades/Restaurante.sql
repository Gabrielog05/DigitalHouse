CREATE DATABASE IF NOT EXISTS Restaurante;
USE Restaurante;

CREATE TABLE IF NOT EXISTS Categoria (
id TINYINT UNSIGNED AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
CONSTRAINT Pk_Categoria_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Cliente (
	id INT UNSIGNED AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    sobrenome VARCHAR(40) NULL,
    cpf CHAR(11) NULL,
    email VARCHAR(25) NOT NULL,
    telefone CHAR(12) NULL,
    CONSTRAINT Pk_Cliente_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Produto (
	id INT UNSIGNED AUTO_INCREMENT primary key,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT NULL,
    urlImagem VARCHAR(50) NULL,
    idCategoria TINYINT UNSIGNED,
    CONSTRAINT Fk_Produto_Categoria_idCategoria FOREIGN KEY (idCategoria) REFERENCES Categoria (id)
);

CREATE TABLE IF NOT EXISTS Venda (
	id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    dataVenda DATETIME NOT NULL,
    valorTotal DECIMAL(10,2) NOT NULL
);

ALTER TABLE Venda ADD COLUMN idCliente INT UNSIGNED;
ALTER TABLE Venda ADD CONSTRAINT FK_Venda_Cliente FOREIGN KEY (idCliente) REFERENCES Cliente (id);

CREATE TABLE IF NOT EXISTS ItemVenda (
	id INT UNSIGNED NOT NULL,
    quantidade INT UNSIGNED NOT NULL,
    precoUnitario DECIMAL (8,2) NOT NULL,
    idVenda BIGINT UNSIGNED NOT NULL,
    idProduto INT UNSIGNED NOT NULL,
    CONSTRAINT PK_ItemVenda_id PRIMARY KEY (id),
    CONSTRAINT FK_ItemVenda_Venda FOREIGN KEY (idVenda) REFERENCES Venda (id),
    FOREIGN KEY (idProduto) REFERENCES Produto (id)
);

INSERT INTO Cliente (id, nome, sobrenome, email)
VALUES (DEFAULT, 'Gabriel', 'Gonzaga', 'gabriel@gmail.com');


