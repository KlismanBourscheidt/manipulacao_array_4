const prompt = require("prompt-sync")()

let lista = []

function media(){

    for(let i = 1; i <= 6; i++){
        let num = Number(prompt(`Digite o numero para acrescentar na lista (${i}/6): `))
        lista.push(num)
        console.log(lista)
    }

    soma()
}

media()

function soma(){
    let total = lista.reduce((acumulador, valor) => acumulador+valor, 0)
    let calc = total/lista.length
    console.log(`A soma dos valores é: ${total}`)
    console.log(`A media dos valores é: ${calc}`)
}
