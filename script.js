 function randomGen () {
    return Math.floor(Math.random() * 3)
}

const userInt = prompt("Rock, Paper & Scissors! Escolha 0 para Papel, 1 para Pedra, ou 2 para Tesoura.").toUpperCase()
console.log(`Você escolheu ${userInt}.`)

function play() {
    const enemy = randomGen()
    if (enemy == 0) {
        console.log(`O inimigo escolheu PAPEL`)
    } else if (enemy == 1) {
        console.log(`O inimigo escolheu PEDRA`)
    } else {
        console.log(`O inimigo escolheu TESOURA`)
    }
    if (userInt == "TESOURA" && enemy == 1 || userInt == "PAPEL" && enemy == 2 || userInt == "PEDRA" && enemy == 0) {
       
        console.log("Você perdeu.")

    } else if (userInt == "PEDRA" && enemy == 2 || userInt == "TESOURA" && enemy == 0 || userInt == "PAPEL" && enemy == 1) {
       
        console.log("Você venceu!")

    } else {
        
        console.log("Eita, deu empate!")
    }
    
    
}

play()