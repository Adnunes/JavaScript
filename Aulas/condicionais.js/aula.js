    ;
// utilizar == igual, o js ignora o tipo se é texto ou não

/* utilizar === , o js considera o tipo o tipo se é texto ou não
 eNumeroPar = (numero%2)==='0';
vai dar erro
 */

const numero =0;

const eNumeroPar = (numero%2)===0;


if(numero===0){
    console.log("É um numero invalido");

}
else if (eNumeroPar){
    console.log("É um numero par")
    
}else{
    console.log("é um numero impar");

}

