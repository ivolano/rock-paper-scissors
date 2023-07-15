 function randomGen (max) {
    return Math.floor(Math.random() * max)
}

const userInt = parseInt(prompt("Rock, Paper & Scissors! Escolha 0 para Papel, 1 para Pedra, ou 2 para Tesoura."))
console.log(`Você escolheu ${userInt}.`)

function play() {
    const enemy = randomGen(3)
    if (userInt == 0 && enemy == 1 || userInt == 1 && enemy == 2 || userInt == 2 && enemy == 0) {
        console.log(`O inimigo escolheu ${enemy}.`)
        console.log("Ah, você perdeu.")

    } else if (userInt == 0 && enemy == 2 || userInt == 1 && enemy == 0 || userInt == 2 && enemy == 1) {
        console.log(`O inimigo escolheu ${enemy}.`)
        console.log("Ah, você venceu!")

    } else {
        console.log(`O inimigo escolheu ${enemy}.`)
        console.log("Eita, deu empate!")
    }

}

play()