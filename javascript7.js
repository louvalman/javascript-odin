let Player;
let Computer;

let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= 33) {
        getComputerChoice = "Rock"; 
    } else if (randomNumber <= 66) {
        getComputerChoice = "Paper";
    } else {
        getComputerChoice = "Scissor";
    }
    return getComputerChoice;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice;
    let winner;
    if (playerSelection = "Rock" && getComputerChoice === "Paper") {
        return 'You lose! Paper beats Rock.'
    } else if (playerSelection = "Rock" && getComputerChoice === "Scissor") {
        return 'You win! Rock beats Scissor.'
    } else if (playerSelection = "Rock" && getComputerChoice === "Rock") {
        return 'It is a tie! Play again.'
    } else if (playerSelection = "Paper" && getComputerChoice === "Rock") {
        return 'You win! Paper beats rock.'
    } else if (playerSelection = "Paper" && getComputerChoice === "Paper") {
        return 'It is a tie! Play again!'
    } else if (playerSelection = "Paper" && getComputerChoice === "Scissor") {
        return 'You lose! Scissor beats paper.'
    } else if (playerSelection = "Scissor" && getComputerChoice === "Rock") {
        return 'You lose! Rock beats Scissor.'
    } else if (playerSelection = "Scissor" && getComputerChoice === "Paper") {
        return 'You win! Scissor beats paper'
    } else if (playerSelection = "Scissor" && getComputerChoice === "Scissor") {
        return 'It is a tie! Play again!'
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));