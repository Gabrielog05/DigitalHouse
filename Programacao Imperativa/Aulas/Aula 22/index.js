// Aula 22
/*
    Funções avancadas
        - Calbacks
        - Arrow Functions
        - Recursão
    Arrays avançados
        - Map
        - forEach
        - reduce
        - filter
        - sort
 */


// - Arrow Functions

//Declaração da função
function minhaFuncao(param1,param2){
    console.log('Minha função');
}

//Chamada da função
//minhaFuncao();

/*
    Não precisa da palavra reservada function
    Inicia ocm o () -> passagem de parâmetros
    Após os () vem a notação de "flecha" =>
    Seguimos com abertura e fechamento das {}
*/

/* 
    function quadrado (n){
        return n*n;
    }

    Quando temos apenas um parâmetro, não é necessário o uso do ()
    Quando temos um retorno simples, pode-se ignorar o uso das {} e
    da palavra reservada return;
    */

const quadrado = n => n*n;

const minhaFuncao2 = (param1,param2) => {
    console.log('Minha arrow function');
}

//minhaFuncao2();

// Chamada a arrow function
console.log(quadrado(2));
minhaFuncao2();


// diferença da function para arrow function no objeto
const meuObjeto = {
    func1:function(){
        console.log(this.prop1);
    },
    func2:() => {
        //Contexto Léxico
        console.log(this.prop1); //- This nesse caso é como um objeto vazio
    },
    prop1:5
}

//meuObjeto.func1();
//meuObjeto.func2();

/* - Callbacks
    Códigos Assíncronos -> Vão executar fora de ordem
    Códigos Síncronos -> Vão executar em ordem
    */


/*setTimeout(() => {
    console.log('3 segundos após...');
}, 3000);
*/
//meuObjeto.func1();
//meuObjeto.func2();


let array = [1,2,4,6,10,90];

array.forEach((valorAtual,indice)  => {
    console.log(`Valor Atual: ${valorAtual} e indice atual: ${indice}`);
})

array.forEach(valor => console.log(valor));

console.log(array.map(quadrado));