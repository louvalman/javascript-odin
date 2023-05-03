let Player;
let Computer;
let winner = "Play a game to find a winner";

let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= 33) {
        return "rock"; 
    } else if (randomNumber <= 66) {
        return "paper";
    } else {
        return "scissor";
    }
}

let playerSelection = prompt('Pick your weapon!','');
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper") {
        winner = Computer;
        return 'You lose! Paper beats Rock.'
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        winner = Player;
        return 'You win! Rock beats Scissor.'
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return 'It is a tie! Play again.'
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        winner = Player;
        return 'You win! Paper beats rock.'
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return 'It is a tie! Play again!'
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        winner = Computer;
        return 'You lose! Scissor beats paper.'
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        winner = Computer;
        return 'You lose! Rock beats Scissor.'
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        winner = Player;
        return 'You win! Scissor beats paper'
    } else if (playerSelection === "scissor" && computerSelection === "scissor") {
        return 'It is a tie! Play again!'
    }
}

console.log(playRound(playerSelection, computerSelection));

