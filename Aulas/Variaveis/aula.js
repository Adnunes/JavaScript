// js é fracamente tipado e case sensitivy

var var1 = 10;
var var2 = 'texto';

console.log(var1 +var2);

var2 = '20'

console.log(var1 + var2);

console.log(var1 - var2);

var2 = 'texto';

console.log(var1 - var2);

// let se restringe a qualquer tipo de bloco. var se restringe a escopo de função ou global (hoisting)
//comportamento do const é igual ao let, com a diferença de ser constante

// convenção de nomenclatura
// var _teste = 10;
// const TESTE = 10;
// const palavraComposta