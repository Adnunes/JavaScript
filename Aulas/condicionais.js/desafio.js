/*
Faça um programa para calcular o valor de uma viagem

você terá 3 variáveis. Sendo elas:
1. Preço do etanol;
2. Preço da gasolina;
3.tipo de combustivel que esta no seu carro
4. gasto medio de combustivel
5. distancia combustivel
*/

//declara variaveis

const precoDoEtanol=5.50;
const precoDaGasolina = 6.30;
const isGasoline = false;
const gastoMedio = 10;
const distanciaPercorrida= 100;

let custoDaViagem=0;

//verifica se é gasolina
if (isGasoline){
    //calcula o preço da viagem a gasolina
    custoDaViagem=distanciaPercorrida/gastoMedio*precoDaGasolina;
    //imprime o valor da viagem
    console.log("Custo da Viagem com Gasolina: ", custoDaViagem.toFixed(2));
}else{
    //calcula o valor da viagem a alcool
    custoDaViagem = distanciaPercorrida/gastoMedio*precoDoEtanol;
    //imprime o valor da viagem 
    console.log("Custo da viagem com Etano: ", custoDaViagem.toFixed(2));
}