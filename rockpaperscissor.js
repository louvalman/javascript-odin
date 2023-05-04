let getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  if (randomNumber <= 33) {
    return "rock";
  } else if (randomNumber <= 66) {
    return "paper";
  } else {
    return "scissor";
  }
};

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "paper") {
    return { result: "You lose! Paper beats Rock.", winner: "computer" };
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    return { result: "You win! Rock beats Scissor.", winner: "player" };
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return { result: "It is a tie!", winner: null };
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return { result: "You win! Paper beats rock.", winner: "player" };
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return { result: "It is a tie!", winner: null };
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    return { result: "You lose! Scissor beats paper.", winner: "computer" };
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    return { result: "You lose! Rock beats Scissor.", winner: "computer" };
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    return { result: "You win! Scissor beats paper", winner: "player" };
  } else if (playerSelection === "scissor" && computerSelection === "scissor") {
    return { result: "It is a tie!", winner: null };
  }
}

function game() {
  // invoke game function to start a game, can be done anytime

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    // creates i(teration) variable, which represents a round - first round is round one - when i reaches 5 (meaning five rounds has been played) game stops running, everytime one game has been played, increment i by 1
    console.log(`Round ${i}`); // log the round number to console so player knows which round we are at
    let playerSelection = prompt("Pick your weapon!", ""); // rounds begins with player chosing their weapon!
    const computerSelection = getComputerChoice(); // computer's weapon is defined at random by invoking the getComputerChoice function above
    const roundResult = playRound(playerSelection, computerSelection); // the result of the round is defined by the playRound function by comparing playerSelection and computerSelection parameters defined above and stored in roundResult variable
    console.log(roundResult.result); // the result of the function (string) is posted to the console

    if (roundResult.winner === "player") {
      // calculate the winner by incrementing the player's or computer's score by looking at the winner variable defined in the playRound function, and report the results to the console
      playerScore++;
      console.log(
        `You have ${playerScore} points, and the computer has ${computerScore} points`
      );
    } else if (roundResult.winner === "computer") {
      computerScore++;
      console.log(
        `You have ${playerScore} points, and the computer has ${computerScore} points`
      );
    } else if (roundResult.winner === null) {
      console.log(
        `You still have ${playerScore} points, and the computer still has ${computerScore} points`
      );
    }

    if (computerScore === 3 || playerScore === 3) {
      i = 5;
    }

    if (i === 4 && computerScore === 2 && playerScore === 0) {
      // if the score is 2-0 in round 4, end the game (i = 5) and declare winner in below if statement - DOESN'T WORK
      i = 5;
    } else if (i === 4 && playerScore === 2 && computerScore == 0) {
      i = 5;
    }

    if (i >= 5 && computerScore > playerScore) {
      // calculate and report winner (add || if player reaches three points)
      console.log("GAME OVER! YOU LOSE!!!");
    } else if (i >= 5 && playerScore > computerScore) {
      console.log("CONGRATURLATIONS! YOU WIN!!!");
    } else if (i >= 5 && playerScore === computerScore) {
      console.log("A TIE! PLAY AGAIN TO FIND A WINNER!");
    }
  }
}
