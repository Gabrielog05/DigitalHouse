use musimundos;

# 1
SELECT 
MAX(valor_total)
FROM faturas
WHERE cidade_cobranca = 'Oslo';

#2
SELECT 
MIN(valor_total)
FROM faturas
WHERE cidade_cobranca = 'Oslo';

#3
SELECT 
AVG(valor_total)
FROM faturas
WHERE pais_cobranca = 'Canada';

#4
SELECT
COUNT(id),
pais_cobranca
FROM faturas
WHERE pais_cobranca ='Canada';

#5
SELECT
SUM(valor_total) as Total
FROM faturas;

#6
SELECT
	id, 
	data_fatura,
	valor_total
FROM faturas
WHERE 
	valor_total < (SELECT AVG(valor_total) FROM faturas);

#7
SELECT
	*
FROM empregados
WHERE
	data_nascimento = (SELECT MIN(data_nascimento) FROM empregados);

#8
SELECT
	*
FROM empregados
WHERE
	data_nascimento = (SELECT MAX(data_nascimento) FROM empregados);
    
#9
SELECT
	DATE_FORMAT(data_nascimento, '%d-%m-%y') as Data_Nascimento
FROM empregados;

#10
SELECT
    COUNT(compositor) as Qtde_AcDc
FROM cancoes
WHERE compositor = 'AC/DC';

#11
SELECT
	AVG(duracao_milisegundos)
FROM cancoes    





 





