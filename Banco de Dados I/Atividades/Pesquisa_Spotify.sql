/* SPOTIFY
	4. Mostre a lista de reprodução que contém mais músicas, renomeando as colunas, 
    colocando em maiúscula a primeira letra, os acentos correspondentes e adicionando os espaços entre as palavras
*/

use projeto_spotify;

SELECT 
	idPlaylist,
    idusuario,
    titulo AS `Título`,
    qtdcancoes AS `Quantidade de Canções`,
    idestado,
    Datacriacao AS `Data de Criação da Playlsit`,
    Dataexclusao AS `Data de Exclusão da Playlist`
FROM Playlist
ORDER BY qtdCancoes DESC
LIMIT 2;
    
	