// ------------------------------- Exercício 1 -------------------------------

// Converter todos os filmes em letra maíuscula

let filmes = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'a vida é bela'];

/*

function converterMaiusculas(array){
    for(let i = 0; i <= array.length; i++) {
        array[i] = array[i].toUpperCase();
    }
    return array;
}

console.log(filmes.length);
onsole.log(converterMaiusculas(filmes)); 
*/

// ------------------------------- Exercício 2 -------------------------------

/* Agora precisamos modificar a função passagemDeElemento() que nos permite
adicionar o conteúdo de nossa matriz de filme animado à matriz de filme
original */

let animacoes = ['toy story', 'vida de inseto', 'mickey mouse', 'padrinhos magicos', 'overwatch'];


function passagemDeElementos(array1,array2){
    for(let i = 0; i < array2.length; i++) {
        array1.push(array2.pop().toUpperCase());
    }
    return array1;
} 

console.log(passagemDeElementos(filmes,animacoes));
console.log(filmes);

// ------------------------------- Exercício 3 -------------------------------

/*
A partir deste ponto, se você decidiu trabalhar em um arquivo diferente ao
invés d e modificar o anterior, lembre-se que tivemos um infiltrado dentro de
nossos filmes de animação, o qual tivemos que tirar e salvar em outra variável
antes de fazer a passagem de elementos de um array para outro!
*/

/*
let notFilme = [];

function tirarFilme(array1,array2) {
    for(let i = 0; i < array2.length; i++) {
        array1.push(array2.pop());
    }
    return array1;
}

console.log(tirarFilme(notFilme,filmes('overwatch'))); //incompleto */

//------------------------------- 4 -------------------------------

/* Finalmente, devemos modificar nossa função comparadora para os filmes como temos feito até agora.

*/

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararClassificacoes(asia,europa) {
    let comparacaoAsiaEuropa = [];
    for(let i = 0; i < asiaScores.length; i++) {
        comparacaoAsiaEuropa[i] = asiaScores[i] == euroScores[i];
    }
    return comparacaoAsiaEuropa;
}

console.log(compararClassificacoes(asiaScores, euroScores));

//------------------------------- Exercício Bonus -------------------------------

// // Participante A:  5, 8, 4, 9, 5
// // Participante B:  8, 7, 8, 6, 8
// // Participante C:  7, 5, 10, 8, 3
