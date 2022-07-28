const nome = 'Jose'; 
const sobrenome = ' da Silva'; 
let idade = 27; 
let peso = 83.5; 
const altura = 1.7; 
let plano = true;

let calcAltura = (altura * altura);
let imc = (peso / calcAltura);

console.log(nome + sobrenome + ' tem' + idade + ' anos e seu IMC é ' + imc);

//template strings

console.log(´${nome} ${sobrenome} tem ${idade} anos e seu indice de massa corporativa é de ${imc}´);