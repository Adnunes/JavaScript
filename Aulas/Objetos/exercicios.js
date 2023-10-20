/*
1. crie uma classe para representar carros.
carros possuem uma marca, uma cor e um gasto medio de combustível por kilometro rodado.
Criar um método que dado a quantidade de quilometros e  preço do combustível nos dê o vaor gasto em reais para realizar este percurso
*/

class Carros{
    constructor(marca, cor, gasotMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gasotMedioPorKm = gasotMedioPorKm;
    }

    calcularGastoDoPercurso( distanciaTotal, precoCombustivel){
       return this.gasotMedioPorKm*distanciaTotal*precoCombustivel;
    
    }

    
}

/* 
2. Crie uma classe para representar pessoas. Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o vlaor do seu IMC (IMC = Peso / (altura*altura));
Instancie uma pessoa chamada jose que tenha 70kg e 1.75 de altura e peca para o jose dizer o valor do seu IMC
*/

class Pessoa{
    nome;
    peso;
    altura; 
    constructor(nome, peso, altura){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;

    }

    calcularImc(){
        return (this.peso/Math.pow(this.altura,2)).toFixed(2);

    }

}

const jose = new Pessoa("jose", 70,1.75)

console.log(jose.calcularImc())