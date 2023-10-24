


// /*
 

// const pessoa = {
//     nome: "Andre Dias",
//     idade: 25,

//     descrever: function(){
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)

//     }

    
// };

//  */

// class Pessoa{
//     nome;
//     idade;

//     constructor (nome, idade){
//         this.nome = nome;
//         this.idade = idade;
//     }

//     descrever(){
//         console.log(`meu nome é ${this.nome} e minha idade é ${this.nome}`)

//     }

// }

// function compararPessoas(p1, p2){
//     if (p1.idade > p2.idade){
//         console.log(`${p1.nome} é mais velho(a) do que ${p2.nome}`);
//     }else if (p2.idade > p1.idade){
//         console.log(`${p2.nome} é mais velho(a) do que ${p1.nome}`);

//     }else{
//         console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
//     }
// }


// const p1 = new Pessoa("Andre", 25)
// const p2 = new Pessoa("Vitor", 25)

// compararPessoas(p1, p2)



const pessoa = {
    genero:'masculino',
    idade:18

}

// cria um objeto com o prototype pessoa
const renan=Object.create(pessoa);

renan.nome = 'Renan'
console.log(renan);

console.log(renan.genero);

console.log(renan.idade);