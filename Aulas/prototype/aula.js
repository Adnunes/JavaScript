// function Pessoa(nome, idade){
//     this.nome = nome,
//     this.idade = idade;
// };

// Pessoa.prototype.falar = function(){
//     console.log(`Meu nome é: ${this.nome}`)
// }

// const joao = {
//     genero: 'masculino'
// }

// Pessoa.call(joao, 'joao', 22)

// console.log(joao)




// //first class functions
// //higher order functions

// function falarMeuNome(){
//     console.log('Meu nome é André');
// };


// function falarMeuNomeCompleto(falarMeuNome){
//     falarMeuNome();
//     console.log('Dias Nunes');
// };

// falarMeuNomeCompleto(falarMeuNome)


// //function declaration
// function nomeDafuncao(){
//     console.log('nomeDaFuncao');

// };

// //
// const nomeDeOutraFuncao = function(){
//     console.log('nomeDeOutraFuncao');

// }






function adicao(x,y){
    return x+y;

}

function multiplicacao(x,y){
    return x*y;
}



function calculadora(x, operacao, y){
    return console.log(operacao(x,y));

}

calculadora(10,adicao,10)
calculadora(10,multiplicacao,10)