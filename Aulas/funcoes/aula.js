function calcularImc(peso, altura){
    return peso/Math.pow(altura,2);
    
}

function classificarImc(imc){
    //verificar se esta abaixo de 18.5
    if (imc<18.5){
        return "Indice IMC: "+imc+ " --> abaixo do peso";
    }
    //verificar se esta entre 18.5 e 25 
    else if (imc >+ 18.5 &&  imc<25){
        return "Indice IMC: "+ imc.toFixed(2) +" --> peso normal";
    }
    // verificar se esta entre 25 e 30
    else if(imc>=25 && imc<30){
        return"Indice IMC: "+ imc.toFixed(2) +" --> acima do peso";
    }
    //verificar se está entre 30 e 40
    else if(imc >=30 && imc<40){
        return "Indice IMC: " + imc.toFixed(2) +" --> obeso";
    }
    //verificar se esta acima de 40
    else{
        return "Indice IMC: "+ imc.toFixed(2)+" --> Obeso mórbido";

    }

}


(function (){
    const peso = 96;
    const altura = 1.78;

    const imc= calcularImc(peso,altura)

    console.log(classificarImc(imc));


})();

