
// // uma função
// function sayHello(){
//     console.log("Hello world!!")

// }
// sayHello();

// // um objeto
// obj={name:{first:'gandalf', last:'the grey'}, address:'Middle earth'};

// console.log(obj['name']['last'])

// // em programação orientada a objeto, um objeto é a instância de uma classe. Uma classse define as características do objeto

// // function Book(title, page, isbn){
// //     this.title = title;
// //     this.page = page;
// //     this.isbn = isbn;
// //     this.printIsbn = function(){
// //         console.log(this.isbn);
// //     };

// // };
// // Escopo de variaves com let e const

// let movie = 'lord of the rings';

// // var movie = "Batan v Superman"; erro, movie ja foi declarada

// function starWarsFan(){
//     const movie = 'Star Wars'
//     return movie;

// }

// function marvelFan(){
//     movie = 'The Avengers';
//     return movie;

// };

// function blizzardFan(){
//     const isFan = true;
//     let phrase = 'Warcraft';
//     console.log("Before if: " + phrase);
//     if (isFan){
//         let phrase = 'initial test';
//         phrase = 'for the Horde!';
//         console.log('Inside if: ' + phrase);

//     }
//     phrase = 'For the Alliancee';
//     console.log('After if: ' + phrase);

// };

// const book = {
//     name: 'learning JavaScript DataStructures and Algorithms'
// };

// // console.log('you are reading ' + book.name + '.,\n and this is a new line \n and so is this.')
// // melhorando a sintaxe
// // console.log(`You are reading ${book.name}, 
// // and this is a new line
// // and so is this.`)


// // As funcoes de seta (arrow functions) sao uma otima maneira de simplificar a sintaxe das funcoes ES2015

// var circleAreaES5 = function cicleArea(r){
//     var PI = 3.14;
//     var area = PI * r*r;
//     return area;
// };
// // console.log(circleAreaES5(2))

// const circleArea = r =>{
//     const PI = 3.14;
//     const area = PI * r *r;
//     return area;
// };

// // console.log(circleArea(2));

// // se a funcao tiver uma unica instrucao, podemos usar uma vesao mais simples
// //omitindo a palavra reservada return e as chaves

// const circleAreaTwo = r => 3.14 * r *r;

// // console.log(circleAreaTwo(2));

// //com o ES15 podemos definir valores default para a funcao

// function soma(x=1, y=2, z=3){
//     return x+y+z;
// };

// console.log(soma()); //deve imprimir 6 (1+2+3)
// console.log(soma(2)); // deve imprimir 7 (2+2+3)
// console.log(soma(2,4)); // deve imprimir 9 (2+4+3)
// console.log(soma(4,2,4));// deve imprimir 10 (4+2+4)


// //declarando os operadores de espalhamento e rest

// /**
//  * podemos transformar arrays em parãmetors usando a função apply()
//  * Operador de espaçamento (spread operator), representado por ...
//  * 
//  */

// let params = [4,2,4];

// console.log(soma(...params));

// // o código anterior é igual a este código escrito em ES5:
// console.log(soma.apply(undefined, params))


// var numbers = [1, 2, ...params]; //pushing values into array
// console.log(numbers);

// //code above is the same as ES5:
// function restParamaterFunction2 (x, y) {
//     var a = Array.prototype.slice.call(arguments, 2);
//     return (x + y) * a.length;
// };
// console.log(restParamaterFunction2(1, 2, "hello", true, 7));


//array destructuring

// let [x,y] = ['a','b']

// executar o codigo anterior é o mesmo que fazer:

// let x = 'a';
// let y = 'b';


// [x,y] = [y,x]

// o codigo anterior é o mesmo que 

// var temp = x;
// x = y;
// y = temp;

// // abreviação de propriedades (property shorthand)

// let [ x, y ] = ['a','b'];

// let obj = {x,y};

// console.log(obj); 

// // shorthand method names, permite que os desenvlvedores declarem funcoes dentro de objetos

// const hello = {
//     name:'abcdef',
//     printHello(){
//         console.log('Hello');
//     }
// }

// console.log(hello.printHello());

// //´pode ser escrito assim:
// var hello1 = {
//     name:'abcdef',
//     printHello: function printHello(){
//         console.log('hello')

//     }
  
// }

// console.log(hello.printHello())




