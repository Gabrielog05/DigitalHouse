let filmes = [
    "star wars",
    "totoro",
    "rocky",
    "pulp fiction",
    "la vida es bella",
];

//------------------------------- 1 -------------------------------
////e nos pediram para passar todos os elementos para letras maiúsculas,
//o que na época tínhamos feito de forma "manual". Vamos movê-lo para uma maneira mais automática usando loops.

function converterMaiusculasLoop(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
    }
    return array;
}

console.log(`
------------------------------- Exercício 1 -------------------------------
`);
console.log(converterMaiusculasLoop(filmes));

console.log(`
-------------------------------------//------------------------------------
`);

//------------------------------- 2 -------------------------------
//Agora precisamos modificar a função de passagem de elemento()
//que nos permite adicionar o conteúdo de nossa matriz de filme animado à matriz de filme original.

let filmesAnimados = [
    "Toy Story",
    "Procurando Nemo",
    "Kung-fu Panda",
    "Wally",
    "Fortnite",
];

function removerUltimoElemento(array) {
    return array.pop();
}

let ultimoElemento = removerUltimoElemento(filmesAnimados);

// function pasajeDeElementos(array1, array2) {
//     array1.push(array2.pop().toUpperCase())
//     array1.push(array2.pop().toUpperCase())
//     array1.push(array2.pop().toUpperCase())
//     return array1
// }

// function passagemDeElementos(array1, array2){
//     for(let i = 0; i < array2.length; i++){
//         array1.push(array2.pop().toUpperCase())
//     }
//     return array1
// }

function passagemDeElementos(array1, array2) {
    for (const element of array2) {
        array1.push(array2.pop().toUpperCase());
    }
    return array1;
}
console.log(`
------------------------------- Exercício 2 -------------------------------
`);

//console.log(pasajeDeElementos(filmes, filmesAnimados));
console.log(passagemDeElementos(filmes, filmesAnimados));

console.log(`
-------------------------------------//------------------------------------
`);

//------------------------------- 3 -------------------------------
// Para este ponto se você decidiu trabalhar em um arquivo diferente em lugar para modificar o anterior,
// lembre-se que tivemos um infiltrado dentro de nossos filmes de animação que tivemos que tirar e salvar
// em outra variável antes de fazer a passagem de elementos de um array para outro!
console.log(`
------------------------------- Exercício 3 -------------------------------
`);

console.log(`
-----------------------> Último elemento: ${ultimoElemento} <-----------------------
`);

console.log(`
-------------------------------------//------------------------------------
`);
//------------------------------- 4 -------------------------------
// Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
// Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.

// function compararCalificaciones(asia, europa) {
//   let comparacionesAsiaEuropa = [];
//   comparacionesAsiaEuropa[0] = asia[0] === europa[0];
//   comparacionesAsiaEuropa[1] = asia[1] === europa[1];
//   comparacionesAsiaEuropa[2] = asia[2] === europa[2];
//   comparacionesAsiaEuropa[3] = asia[3] === europa[3];
//   return comparacionesAsiaEuropa;
// }

function compararClassificacoes(asia, europa) {
    let comparacionesAsiaEuropa = [];
    for (let i = 0; i < asia.length; i++) {
        comparacionesAsiaEuropa[i] = asia[i] == europa[i];
        console.log(`
    Pontuação Asia -> ${asia[i]} é igual Pontuação Europa ->  ${europa[i]} =  ${comparacionesAsiaEuropa[i]}
    `);
    }
    return comparacionesAsiaEuropa;
}

console.log(`
------------------------------- Exercício 4 -------------------------------
`);

console.log(compararClassificacoes(asiaScores, euroScores));

console.log(`
-------------------------------------//------------------------------------
`);

// Participante A:  5, 8, 4, 9, 5
// Participante B:  8, 7, 8, 6, 8
// Participante C:  7, 5, 10, 8, 3

// Com essas informações, nosso líder de Tecnologia nos pergunta o seguinte:
// Determine qual seria a maneira ideal de representar cada participante com suas pontuações.

// Crie uma função pontuacaoMedia à qual receba um participante por parâmetro e deve calcular e devolver
//  a pontuação média dele.

// Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve calcular e devolver a pontuação
// mais alta que o participante tem.

// Logo nosso líder tecnológico nos pede para criar essas duas funções geramos uma nova funcionalidade chamada
// competição que receberá os 3 participantes por parâmetros, e executará as duas funções criadas anteriormente
// para calcular as médias e pontuações mais altas de cada uma, e deve anunciar (mostrar pelo console) o vencedor
// de cada modalidade de pontuação.

let participanteA = [5, 8, 4, 9, 5];
let participanteB = [8, 7, 8, 6, 8];
let participanteC = [7, 5, 10, 8, 3];

function pontuacaoMedia(array) {
    var i = 0;
    let summ = 0;
    let arrayLen = array.length;

    while (i < arrayLen) {
        summ = summ + array[i++];
    }
    return summ / arrayLen;
}

let a = pontuacaoMedia(participanteA);
let b = pontuacaoMedia(participanteB);
let c = pontuacaoMedia(participanteC);

function pontuacaoMaior(array) {
    return Math.max.apply(null, array);
}

// Logo nosso líder tecnológico nos pede para criar essas duas funções geramos uma nova funcionalidade chamada
// competição que receberá os 3 participantes por parâmetros, e executará as duas funções criadas anteriormente
// para calcular as médias e pontuações mais altas de cada uma, e deve anunciar (mostrar pelo console) o vencedor
// de cada modalidade de pontuação.

function encontraMaiorMedia(a,b,c){
    let resultadoMediaA = pontuacaoMedia(a);
    let resultadoMediaB = pontuacaoMedia(b);
    let resultadoMediaC = pontuacaoMedia(c);
    let maiorMedia;

    if (resultadoMediaA > resultadoMediaB && resultadoMediaA > resultadoMediaC) {
        maiorMedia = console.log("Maior média é a do Participante A com:" + resultadoMediaA);
    } else if (resultadoMediaB > resultadoMediaA && resultadoMediaB > resultadoMediaC) {
        maiorMedia = console.log("Maior média é a do Participante B com:" + resultadoMediaB);
    } else {
        maiorMedia = console.log("Maior média é a do Participante C com:" + resultadoMediaC);
    }
    return maiorMedia
}

function encontraMaiorNota(a,b,c){
    let resultadoMaiorA = pontuacaoMaior(a);
    let resultadoMaiorB = pontuacaoMaior(b);
    let resultadoMaiorC = pontuacaoMaior(c);
    let maiorNota;

    if (resultadoMaiorA > resultadoMaiorB && resultadoMaiorA > resultadoMaiorC) {
        maiorNota = console.log("Maior nota é a do Participante A com: " + resultadoMaiorA);
    } else if (resultadoMaiorB > resultadoMaiorA && resultadoMaiorB > resultadoMaiorC) {
        maiorNota = console.log("Maior nota é a do Participante B com: " + resultadoMaiorB);
    } else if(resultadoMaiorC > resultadoMaiorA && resultadoMaiorC > resultadoMaiorB){
        maiorNota = console.log("Maior nota é a do Participante C com: " + resultadoMaiorC);
    }
    return maiorNota
}

function competicao(a, b, c) {
    let resultadoMedia = encontraMaiorMedia(a,b,c);
    let resultadoMaior = encontraMaiorNota(a,b,c);

    return(resultadoMedia, resultadoMaior);
}

console.log(`
------------------------------- Exercício Bonus -------------------------------
`);

console.log(`
                Média de pontuação Participante A: ${a};
                Média de pontuação Participante B: ${b};
                Média de pontuação Participante C: ${c};
`);

console.log(`
                A maior pontuação Participante A: ${pontuacaoMaior(participanteA)};
                A maior pontuação Participante B: ${pontuacaoMaior(participanteB)};
                A maior pontuação Participante C: ${pontuacaoMaior(participanteC)};
`);

console.log(competicao(participanteA, participanteB, participanteC));

console.log(`
-------------------------------------//------------------------------------
`);