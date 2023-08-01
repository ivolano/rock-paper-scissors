 function randomGen () {
    return Math.floor(Math.random() * 3)
}


let userScore = 0
let enemyScore = 0

function play() {
    
    const enemy = randomGen()
    const userInt = prompt(`Rock, Paper & Scissors! Escreva 'Pedra', 'Papel ou 'Tesoura' para jogar. Essa é a partida de número ${i}`).toUpperCase()
    console.log(`Você escolheu ${userInt}.`)
    if (enemy == 0) {
        console.log(`O inimigo escolheu PAPEL`)
    } else if (enemy == 1) {
        console.log(`O inimigo escolheu PEDRA`)
    } else {
        console.log(`O inimigo escolheu TESOURA`)
    }
    if (userInt == "TESOURA" && enemy == 1 || userInt == "PAPEL" && enemy == 2 || userInt == "PEDRA" && enemy == 0) {
        
        console.log("Você perdeu.")
        enemyScore++
    } else if (userInt == "PEDRA" && enemy == 2 || userInt == "TESOURA" && enemy == 0 || userInt == "PAPEL" && enemy == 1) {
        
        console.log("Você venceu!")
        userScore++
    } else {
            
        console.log("Eita, deu empate!")
    }

}

let i = 1
while (i <= 5){
    console.log("Partida: " + i)
    play()
    i++
}
    console.log(`Resultado final: Você: ${userScore}. Inimigo: ${enemyScore}`)
if (userScore > enemyScore) {
     console.log("Você venceu.")
} else {
    console.log("Você perdeu.")
}