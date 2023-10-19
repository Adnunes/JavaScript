/*
    1. Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classifcação conforme a tabela abaixo

    media = (nota 1 + nota 2 + nota3)/3

    classificação
    -media menor que 5, reprova;
    -media entre 5 e 7, recuperação;
    -media aciam de 7, passou de semestre;

*/

//declarar variaveis
const nota1 = 7,nota2 = 7, nota3=7;

//calcular a media
let media = (nota1+nota2+nota3)/3;


//verificar se é menor que 5 e retornar "reprovado"
if(media<5){
    console.log("Reprovado")
//verificar está entre 5 e 7 e retornar "em recuperação"
}else if(media>=5 && media<=7){
    console.log("Recuperação")
//verificar se a media está acima de 7  e retornar "aprovado"
}else{
    console.log("Aprovado")
}




