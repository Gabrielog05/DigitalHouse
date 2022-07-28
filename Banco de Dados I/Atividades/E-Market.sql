use eMarket;

# categorias e produtos
# 1) Queremos ter uma lista de todas as categorias
select * from Categorias;

# 2) Como as categorias não possuem imagens, você está interessado em obter apenas um Nome e descrição da lista de categorias.
select CategoriaNome, Descricao from Categorias;

# 3) Obtenha uma lista dos produtos
select * from Produtos;

# 4) Existem produtos descontinuados? (Descontinuado = 1). Não

select Descontinuado, ProdutoNome from Produtos where Descontinuado = 1;

# 5) Na sexta-feira, você deve se reunir com o fornecedor nr. 8. Quais são os produtos que eles fornecem? 4 produtos, chocolate e biscoitos.
select ProvedorID, ProdutoNome from Produtos where ProvedorID = 8;

# 6) Queremos saber todos os produtos cujo preço unitário se encontra entre 10 e 22.
select PrecoUnitario from Produtos where PrecoUnitario between 10 and 22 order by (PrecoUnitario);

# 7) Fica definido que um produto deve ser solicitado ao fornecedor se suas unidades em estoque forem inferiores ao nível de reabastecimento. 
# Existem produtos a solicitar? Sim.
select UnidadesEstoque, NivelReabastecimento, ProdutoNome from Produtos where UnidadesEstoque < NivelReabastecimento;

# 8) Você quer saber todos os produtos da lista anterior, mas que as unidades pedidas sejam iguais a zero.
select UnidadesEstoque, NivelReabastecimento, ProdutoNome, UnidadesPedidas from Produtos where UnidadesPedidas = 0;

# clientes
# 1) Obtenha uma lista de todos os clientes com contato, empresa, cargo, País. Classifique a lista por país.
select Contato, Empresa, Pais, Titulo from Clientes order by Pais;

# 2) Queremos atender todos os clientes que possuem o título de  “Proprietário". Esse título estará em inglês (Owner).
select Titulo from Clientes where Titulo = 'owner';

# 3) A operadora de telefonia atendeu um cliente e não lembra o nome dele. Sabe apenas que começa com "C". 
# Podemos ajudá-lo a obter uma lista com todos os contatos que começam com a letra C?
select Contato from Clientes where Contato like "c%";

# faturas
# 1) Obtenha uma lista de todas as faturas, ordenadas por data da fatura em ordem ascendente.
select * from Faturas order by DataFatura;

# 2) Agora é necessário uma lista de faturas com o país de envio "EUA" e que a FormaeEnvio seja diferente de 3.
select FaturaId, PaisEnvio, FormaEnvio from Faturas where PaisEnvio = 'USA' and FormaEnvio != 3;

# 3) O cliente 'GOURL' fez um pedido? Sim.
select NomeEnvio from Faturas where NomeEnvio like '%Gourl%';

# 4) Você deseja visualizar todas as faturas dos funcionários 2, 3, 5, 8 e 9.
select EmpregadoID, FaturaId from Faturas where EmpregadoID IN (2,3,5,8,9);

# produtos
# 1) Obtenha a lista de todos os produtos em ordem decrescente por preço unitário.
select * from Produtos order by PrecoUnitario desc;

# 2) Obtenha a lista dos 5 melhores produtos cujo preço unitário é o mais "Caro".
select ProdutoNome, PrecoUnitario from Produtos order by PrecoUnitario desc limit 5;

# 3) Obtenha um top 10 dos produtos com mais unidades em estoque.
select UnidadesEstoque, ProdutoNome from Produtos order by UnidadesEstoque desc limit 10;

#detalhesFatura
# 1) Obtenha uma lista de FaturaId, Produto, Quantidade.
select FaturaId, ProdutoID, Quantidade from DetalheFatura;

# 2) Classifique a lista acima por Quantidade decrescente. 
select FaturaId, ProdutoID, Quantidade from DetalheFatura order by Quantidade desc;

# 3) Filtre a mesma lista apenas para os produtos cuja quantidade esteja entre 50 e 100. 
select FaturaId, ProdutoID, Quantidade from DetalheFatura where Quantidade >= 50 and Quantidade <= 100;

# 4) Em outra nova consulta, obtenha uma lista com os seguintes nomes de coluna: 
  # Número da fatura (FaturaId), Produto (ProdutoId), Total (Preço Unitário * Quantidade)
select FaturaId as Fatura, ProdutoID as Produto, (PrecoUnitario * Quantidade) as Total from DetalheFatura;

# extras
# 1) Obtenha uma lista de todos os clientes que moram no “Brasil” ou “México” ou que tenham um título que começa com "Vendas" (o termo estará em inglês: ‘Sales’);
select Contato, Pais, Titulo from Clientes where (Pais = 'Brazil' or Pais = 'Mexico') or Titulo like 'sales%';

# 2) Obtenha uma lista de todos os clientes que pertencem a uma empresa que comece com a letra “A”.
select Contato, Empresa from Clientes where Empresa like 'a%';

# 3) Obtenha uma lista com os seguinte dados: Cidade, Contato( renomeie para Nome e Sobrenome), Título (renomeie para Cargo), de todos os clientes que são da cidade "Madrid".
select Cidade, Contato as NomeSobrenome, Titulo as Cargo  from Clientes where Cidade = 'Madrid';

# 4) Obtenha uma lista de todas as faturas com ID entre 10.000 e 10.500
select * from Faturas where FaturaID between 10000 and 10500 order by FaturaId;

# 5) Obtenha uma lista de todas as faturas com ID entre 10.000 e 10.500 ou de clientes com IDs começando com "B".
select * from Faturas where (FaturaID between 10000 and 10500) or (ClienteID like 'B&');

# 6) Existem notas fiscais que informam a cidade expedidora “Vancouver” ou que utilizam FormaEnvio =  3?
select FaturaID, ClienteID, CidadeEnvio, FormaEnvio from Faturas where (CidadeEnvio = 'Vancouver') or (FormaEnvio = 3);

# 7) Qual é a identificação do funcionário de “Buchanan”? 5.
select * from Empregados where Sobrenome like 'Buchanan';

# 8) Existem Notas Fiscais com o EmpregadoId do funcionário acima? SIm muitas.
select * from Faturas where EmpregadoID = 5;
