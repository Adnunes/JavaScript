/*
O IMC indice d emassa corporal é um critério da organização mundial de saude para dar uma indicação sobre a condição de peso de uma pessoa adulta

Formula do IMC
imc = peso / (altura^ altura)

Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo

IMC em adultos condição:
-abaixo de 18.5 do peso;
-entre 18.5 e 25 peso normal;
-entre 25 e 30 acima do peso;
-entre 30 e 40 obeso;
acima de 40 obesidade grave;


*/

//declarar variaveis
const peso = 96,  altura=1.78;

//calcular indice imc
let indiceImc = peso / Math.pow(altura,2);

//verificar se esta abaixo de 18.5
if (indiceImc<18.5){
    console.log("Indice IMC: ",indiceImc, " --> abaixo do peso");
}
//verificar se esta entre 18.5 e 25 
else if (indiceImc >+ 18.5 &&  indiceImc<25){
    console.log("Indice IMC: ", indiceImc.toFixed(2),"--> peso normal");
}
// verificar se esta entre 25 e 30
else if(indiceImc>=25 && indiceImc<30){
    console.log("Indice IMC: ", indiceImc.toFixed(2),"--> acima do peso");
}
//verificar se está entre 30 e 40
else if(indiceImc >=30 && indiceImc<40){
    console.log("Indice IMC: ", indiceImc.toFixed(2),"--> obeso");
}
//verificar se esta acima de 40
else{
    console.log("Indice IMC: ", indiceImc.toFixed(2),"--> Obeso mórbido");

}