# 1 - Liste todas as categorias junto com informações sobre seus produtos. Incluir todas as categorias, mesmo que não tenham produtos.

use emarket;

SELECT 
	faturas.FaturaId,
    faturas.DataFatura,
	correios.Empresa,
    clientes.ClienteID as Cliente,
    categorias.CategoriaNome as Categoria,
    produtos.ProdutoNome as Produto,
    detalhefatura.PrecoUnitario,
    detalhefatura.Quantidade,
    faturas.FormaEnvio    
FROM faturas
INNER JOIN clientes
	ON faturas.ClienteID = clientes.ClienteID
INNER JOIN correios
	ON correios.CorreioID = faturas.FormaEnvio
INNER JOIN detalhefatura
	ON faturas.FaturaID = detalhefatura.FaturaID
INNER JOIN produtos
	ON detalhefatura.ProdutoID = produtos.ProdutoID
INNER JOIN categorias
	ON produtos.categoriaID =  categorias.categoriaID



