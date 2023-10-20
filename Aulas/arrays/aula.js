
function calcularTabuada(numero){
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
        
    }

};

function selecionarNumerosPares(listaDeNumeros){
    for (let i = 0; i < listaDeNumeros.length; i++) {
        const condicao = listaDeNumeros[i]%2===0
        
        if (condicao) {
            console.log(listaDeNumeros[i])
            
        }
    }


}


(function() {
    const numeros = [1,2,3,4,5,6,7,8,9,10];
    
    selecionarNumerosPares(numeros)
    
})();