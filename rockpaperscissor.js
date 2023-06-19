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
let game;

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

    const endGame = () => {
      if (computerScore > playerScore) {
        console.log('GAME OVER! YOU LOSE!!!'); // FIX LOGS
      } else if (playerScore > computerScore) {
        console.log('CONGRATURLATIONS! YOU WIN!!!');
      } else if (playerScore === computerScore) {
        console.log('A TIE! PLAY AGAIN TO FIND A WINNER!');
      }
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

    let roundScore = playerScore + computerScore + tieCounter;

    roundCount.textContent = `Round number: ${roundScore}`;
    score.appendChild(roundCount);

    score.appendChild(roundStatus);

    playerResult.textContent = 'Player: ' + playerScore;
    score.appendChild(playerResult);

    computerResult.textContent = 'Computer: ' + computerScore;
    score.appendChild(computerResult);
  });
});

/* function game() {
  // invoke game function to start a game, can be done anytime

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    // creates i(teration) variable, which represents a round - first round is round one - when i reaches 5 (meaning five rounds has been played) game stops running, everytime one game has been played, increment i by 1
    console.log(`Round ${i} - chose your weapon!`); // log the round number to console so player knows which round we are at
    let playerSelection = prompt('Pick your weapon!', ''); // rounds begins with player chosing their weapon!
    const computerSelection = getComputerChoice(); // computer's weapon is defined at random by invoking the getComputerChoice function above
    const roundResult = playRound(playerSelection, computerSelection); // the result of the round is defined by the playRound function by comparing playerSelection and computerSelection parameters defined above and stored in roundResult variable
    console.log(roundResult.result); // the result of the function (string) is posted to the console

    if (roundResult.winner === 'player') {
      // calculate the winner by incrementing the player's or computer's score by looking at the winner variable defined in the playRound function, and report the results to the console
      playerScore++;
      console.log(
        `For humanity! You have ${playerScore} points, and the computer has ${computerScore} points`
      );
    } else if (roundResult.winner === 'computer') {
      computerScore++;
      console.log(
        `Damn machines! You have ${playerScore} points, and the computer has ${computerScore} points`
      );
    } else if (roundResult.winner === null) {
      console.log(
        `You still have ${playerScore} points, and the computer still has ${computerScore} points`
      );
    }

    if (computerScore === 3 || playerScore === 3) {
      // if computer or player has three points, end the game (in best of five 3 wins)
      i = 5;
    }

    if (i === 4 && computerScore === 2 && playerScore === 0) {
      // if the score is 2-0 after round 4, end the game (i = 5) and declare winner in below if statement - DOESN'T WORK
      i = 5;
    } else if (i === 4 && playerScore === 2 && computerScore == 0) {
      i = 5;
    }

    if (i >= 5 && computerScore > playerScore) {
      console.log('GAME OVER! YOU LOSE!!!');
    } else if (i >= 5 && playerScore > computerScore) {
      console.log('CONGRATURLATIONS! YOU WIN!!!');
    } else if (i >= 5 && playerScore === computerScore) {
      console.log('A TIE! PLAY AGAIN TO FIND A WINNER!');
    }
  }
} */

// test branch rps ui
// test 3
