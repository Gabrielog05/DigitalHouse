function Conta(conta, tipoConta, saldo, titular){
    this.conta = conta;
    this.tipo = tipoConta;
    this.saldo = saldo;
    this.titular = titular;
}

let abigaelNatte = new Conta('5486273622', "ContaCorrente", 27771, "Abigael Natte");
let ramonConnel = new Conta('1183971869', "ContaPoupanca", 8675, "Ramon Connell");
let jarretLafuente = new Conta('9582019689', "ContaPoupanca", 27363, "Jarret Lafuente");
let anselArdley = new Conta('1761924656', "ContaPoupanca", 32415, "Ansel Ardley");
let jackiShurmer = new Conta('7401971607', "ContaPoupanca", 18789, "Jacki Shurmer");
let jobiMawtus = new Conta('630841470', "ContaCorrente", 28776, "Jobi Mawtus");
let thomasinLatour = new Conta('4223508636', "ContaCorrente", 2177, "Thomasin Latour");
let lonnieVerheijden = new Conta('185979521', "ContaPoupanca", 25994, "Lonnie Verheijden");
let alonsoWannan = new Conta('3151956165', "ContaCorrente", 7601, "Alonso Wannan");
let benditeHuggett = new Conta('2138105881', "ContaPoupanca", 33196, "Bendite Huggett");


/*  4 - A partir dos 10 usuários, gereuma lista onde todos eles convergem (lista de objetos) */

let listaClientes = [abigaelNatte, ramonConnel, anselArdley, anselArdley, jackiShurmer, jobiMawtus, 
                    lonnieVerheijden, thomasinLatour, alonsoWannan ];



/*  5 - Também nos pedem a criação de um objeto literal chamado banco que terá uma propriedade chamada clientes,
     ele será composto pela lista de objetos gerados no ponto anterior. */

/* 6 - o objeto do banco criará um método chamado consultarCliente que receberá um nome (titular) 
    por parâmetro e deve pesquisar na lista de contas e retornar ao objeto do cliente que corresponde a esse nome inserido.
*/

let banco = {
    clientes:listaClientes,
    cadastrarCliente(conta, tipoConta, saldo, titular){ // método que cadastra clientes.
        let cliente = new Conta(conta, tipoConta, saldo, titular);
        this.clientes.push(cliente);
    },    
    consultarCliente(titular){
        for(let i = 0; i < this.clientes.length; i++){
            const cliente = this.clientes[i];
            if(cliente.titular === titular){
                console.log('Cliente localizado! ', cliente);
                return cliente;
            }
        }
        console.log('Cliente não encontrado');
    },
    deposito(titular,valorDeposito){
        let cliente = this.consultarCliente(titular);
        if(cliente){
        cliente.saldo += valorDeposito;
        console.log('Depósito realizado, seu novo saldo é: ' + cliente.saldo);
        } else {
            console.log('Depósito não realizado' );
        }
    },
    saque(titular,valorSaque){
        let cliente = this.consultarCliente(titular);
        if(cliente && (cliente.saldo - valorSaque) >= 0){
        cliente.saldo -= valorSaque;
        console.log('Saque realizado, seu novo saldo é: ' + cliente.saldo);
        } else {
            console.log('Saque não realizado' );
        } 
    }
}

banco.cadastrarCliente('2138105881', "Conta Poupanca", 0, 'Bendite Huggett');

banco.deposito('Bendite Huggett', 100);
banco.saque('Bendite Huggett', 60);
banco.consultarCliente('Bendite Huggett');

