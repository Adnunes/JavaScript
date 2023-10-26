const lista = [{nome: "Renan"}, {nome: 'Andre'},{nome: 'Mari'}];

// class Pessoa{
//     constructor(name){
//         this.name=  name
//     }
// }

// const listaNomes = [new Pessoa('joao'), new Pessoa('Diego'), new Pessoa('Andre')]

// const listaSoNomes = listaNomes.map((element)=>{
//     return  element.name;
// })
// lista.forEach((value, i, listRef)=>{
//     console.log(value,i,listRef);
// })

// const listaDePares = lista.filter((element)=>{
//     return (element%2 ===0);

// })

// console.log(listaDePares);

// console.log(listaSoNomes)

// const somaDeTodosOsNumeros = lista.reduce((previous, current)=>previous+current);

// console.log(somaDeTodosOsNumeros)

console.log(lista.map((e)=> e.nome).join('; '));

console.log(lista.filter((e)=>e.nome.startsWith('A')));

