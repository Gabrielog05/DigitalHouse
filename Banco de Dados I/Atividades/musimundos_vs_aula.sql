use musimundos_v2;

select * from  artistas

-- 1 Selecione o nome dos artistas(tabela artistas)  com o nome de seus albuns (tabela albuns) ordenado por id do artista.

SELECT
    artistas.id,
    artistas.nome,
    albuns.titulo
FROM artistas
INNER JOIN albuns ON artistas.id = albuns.id ORDER BY artistas.id

-- 2 Selecione o nome do cliente (clientes) e suas faturas (faturas), porém somente as faturas com valor maior de 5 ordenados pelo valor da fatura decrescente.
