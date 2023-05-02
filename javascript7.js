let getComputerChoice = () => {
    let choiceGenerator = Math.floor(Math.random() * 100) + 1;
    if (choiceGenerator <= 33) {
        getComputerChoice = "Rock"; 
    } else if (choiceGenerator <= 66) {
        getComputerChoice = "Paper";
    } else {
        getComputerChoice = "Scissor";
    }
    console.log(choiceGenerator);
    return getComputerChoice;
}

console.log(getComputerChoice());