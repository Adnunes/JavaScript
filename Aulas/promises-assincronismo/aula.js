// const promessaDeUmNumero = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const numero = parseInt(Math.random() * 100);
//         resolve(numero)
//     },1000)


// })

// promessaDeUmNumero
//     .then((value)=>{
//         console.log(value)
//     })
//    .catch((error)=>{
//         console.log(error)
//    })
//    .finally(()=>{
//         console.log('Finalizou')
//    });

const fs =  require('fs');
const path = require('path');

const filePath = path.resolve(__dirname,'tarefas.csv');

// const promessaDaLeitura = fs.promises.readFile(filePath);


// promessaDaLeitura
//     .then((arquivo)=>arquivo.toString('utf8'))
//     .then((textoDoCsv)=>textoDoCsv.split('\n').slice(1))
//     .then((linhasSemCabecalho)=>linhasSemCabecalho.map((linha)=>{
//         const [nome, feito] = linha.split(';')
//         return {nome, 
//             feito: feito === 'true'
        
//         }

//     }))
//     .then((listaDeTarefas=>console.log(listaDeTarefas)))
//     .catch((error)=>console.log('deu ruim', error));


async function buscarArquivo(){
   try{ const arquivo = await fs.promises.readFile(filePath)
    const textoDoArquivo = arquivo.toString('utf8')
    console.log(textoDoArquivo)
    }catch(error){
        console.log(error);
    }finally{
        console.log('finalizou')
    }
}




buscarArquivo();
