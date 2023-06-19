let getComputerChoice = () => {
  // defines a variable to store a random number between 1-100 that defines comp choice 33% chance for r/p/s
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  if (randomNumber <= 33) {
    return 'rock';
  } else if (randomNumber <= 66) {
    return 'paper';
  } else {
    return 'scissor';
  }
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    return { result: 'You lose! Paper beats Rock.', winner: 'computer' };
  } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
    return { result: 'You win! Rock beats Scissor.', winner: 'player' };
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return { result: 'It is a tie!', winner: null };
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return { result: 'You win! Paper beats rock.', winner: 'player' };
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return { result: 'It is a tie!', winner: null };
  } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
    return { result: 'You lose! Scissor beats paper.', winner: 'computer' };
  } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
    return { result: 'You lose! Rock beats Scissor.', winner: 'computer' };
  } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
    return { result: 'You win! Scissor beats paper', winner: 'player' };
  } else if (playerSelection === 'scissor' && computerSelection === 'scissor') {
    return { result: 'It is a tie!', winner: null };
  }
}

let score = document.querySelector('.score');
let playerScore = 0;
let computerScore = 0;
let tieCounter = 0;

let roundStatus = document.createElement('p');
let playerResult = document.createElement('p');
let computerResult = document.createElement('p');
let roundCount = document.createElement('p');
let gameResult = document.createElement('h2');
let playAgain = document.createElement('button');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();

    const roundResult = playRound(playerSelection, computerSelection);

    if (roundResult.winner === 'player') {
      // calculate the winner by incrementing the player's or computer's score by looking at the winner variable defined in the playRound function
      playerScore++;
      roundStatus.textContent = `For humanity! You have ${playerScore} points, and the computer has ${computerScore} points`;
    } else if (roundResult.winner === 'computer') {
      computerScore++;
      roundStatus.textContent = `Damn machines! You have ${playerScore} points, and the computer has ${computerScore} points`;
    } else if (roundResult.winner === null) {
      tieCounter++;
      roundStatus.textContent = `It's a tie. You still have ${playerScore} points, and the computer still has ${computerScore} points`;
    }

    let roundScore = playerScore + computerScore + tieCounter;

    roundCount.textContent = `Round number: ${roundScore}`;
    score.appendChild(roundCount);

    score.appendChild(roundStatus);

    playerResult.textContent = 'Player: ' + playerScore;
    score.appendChild(playerResult);

    computerResult.textContent = 'Computer: ' + computerScore;
    score.appendChild(computerResult);

    const endGame = () => {
      if (computerScore > playerScore) {
        gameResult.textContent = 'GAME OVER! YOU LOSE!!!';
      } else if (playerScore > computerScore) {
        gameResult.textContent = 'CONGRATURLATIONS! YOU WIN!!!';
      } else if (playerScore === computerScore) {
        gameResult.textContent = 'A TIE! PLAY AGAIN TO FIND A WINNER!';
      }

      score.appendChild(gameResult);

      score.append(playAgain);
      playAgain.textContent = 'Play again';

      buttons.forEach((button) => {
        button.setAttribute('disabled', '');
      });
    };

    if (
      // end game if:
      playerScore + computerScore + tieCounter === 5 || // if five rounds are played
      (playerScore === 3 && computerScore === 0 && tieCounter === 1) || // if player/computer reaches a 3-0 score (in 4 rounds)
      (computerScore === 3 && playerScore === 0 && tieCounter === 1) ||
      (playerScore === 2 && computerScore === 0 && tieCounter === 2) || // if a 2-0 score is reached after 4 rounds
      (computerScore === 2 && playerScore === 0 && tieCounter === 2)
    ) {
      endGame();
    }
  });
});

const newGame = () => {
  // reset the scoreboard and all counters
  playerScore = 0;
  computerScore = 0;
  tieCounter = 0;
  roundScore = 0;
  buttons.forEach((button) => {
    button.removeAttribute('disabled', '');
  });
  console.log('working');
  score.removeChild(roundCount);
  score.removeChild(roundStatus);
  score.removeChild(playerResult);
  score.removeChild(computerResult);
  score.removeChild(playAgain);
  gameResult.textContent = '';
};

playAgain.addEventListener('click', newGame);
