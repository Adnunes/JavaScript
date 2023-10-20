const {gets, print} = require('./funcoes-auxiliares');

/*
    uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1-100.
    Faça um programa que recebe os 5 números sorteados para os alunos e msotre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    saída
    98

*/


let maiorValorEncontrato=0;
const quantidadeDeAlunos = gets();

for (let i = 0; i < quantidadeDeAlunos; i++){
    const numeroSorteado = gets();
    if (numeroSorteado>maiorValorEncontrato) {
        maiorValorEncontrato= numeroSorteado;
        
    }
}

print(maiorValorEncontrato)
