function getComputerChoice() {
    // Create an array variable called options that contains three strings ("Rock","Paper","Scissors")
    const options = ["ROCK", "PAPER", "SCISSORS"];
    // Create a variable called randomNum of type number that will store a random number between 0 and 2 inclusive
    let randomNum = Math.floor(Math.random() * 3)
    // return the options array item that corresponds to randomNum
    return options[randomNum]
}

function getHumanChoice() {
    // Prompt the user for a choice of "Rock, Paper, or Scissors?"
    // and store the selection in a variable of type string called choice.
    let choice = prompt("Rock, Paper, or Scissors");
    return choice
}

// Create variables for player and computer Score of type number
let playerScore = 0;
let computerScore = 0;

// Test Operations
console.log(getComputerChoice())
console.log(getHumanChoice())