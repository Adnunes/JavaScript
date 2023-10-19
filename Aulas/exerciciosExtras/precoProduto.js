/*
    Elabore um algoritmo que calcule o que deve ser pago pro um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagametno escolhida e efetuar o calculo adequado

    Codigo Condição de pagamento
    A vista Debito, recebe 10% de desconto;
    A vista no dinheiro ou pix, recebe 15% de desconto;
    Em duas vezes, rpeco normal de etiqueta sem juros;
    Acima de duas vezes, preco normal de etiqueta mais juros de 10%

    */

    // declarar variaveis
    const condicaoDePagamento = 3;
    const valorDoProduto = 100;
    let valorFinal;

    //verificar a condição de pagamento
    //se debito, 10% de desconto
    if (condicaoDePagamento==1){
        valorFinal = valorDoProduto*0.9;
        console.log("Preoco para pagamento a debito: R$ ", valorFinal.toFixed(3));
        

    }
    //se dinheiro ou pix, 15% de desconto
    else if(condicaoDePagamento== 0){
        valorFinal = valorDoProduto * 0.85
        console.log("Preço para pagamento por pix/dinheiro: R$ ", valorFinal.toFixed(2));

    //acima de duas vezes, preço normal de etiqueta
    }else if(condicaoDePagamento==2){
        console.log("Preço para pagamento por pix/dinheiro: R$ ", valorDoProduto.toFixed(2));
    }
     //acima de duas vezes, preco de etiqueta acrescido de 10%
    else{
        valorFinal = valorDoProduto *1.10
        console.log("Preço para pagamento por pix/dinheiro: R$ ", valorFinal.toFixed(2));
    }

