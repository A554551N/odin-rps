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
    // convert the choice variable to all upper-case letters
    let choice = prompt("Rock, Paper, or Scissors").toUpperCase();
    return choice
}

function playRound(humanChoice, computerChoice) {
    // Compare humanChoice and computerChoice to determine a winner.
    // Otherwise, Scissors cut paper, paper covers rock, rock breaks scissors.
    
    // if the two choices are equal, it is a draw.
    if (humanChoice === computerChoice) {
        return "DRAW"
    } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        // Human wins; return "WIN"
        return "WIN"
        return "ROCK beats SCISSORS, you win!"
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        // Human wins; return "WIN"
        return "WIN"
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        // Human wins; return "WIN"
        return "WIN"
    } else {
        //In all other cases, the computer wins.  Return "LOSE"
        return "LOSE"
    }
}

function playGame() {
    // - Create a number variable called round which initializes at 1
    let round = 1;
    // - Create a number variable called playerScore which initializes at 0
    let playerScore = 0;
    // - Create a number variable called computerScore which intializes at 0
    let computerScore = 0
    // - LOOP the following five times using round as the sentry variable.  If round >5 the game is over:
    while (round <= 5) {
        // - Call getHumanChoice and store the result in a variable called humanChoice
        let humanChoice = getHumanChoice();
        // - Call getComputerChoice and store the result in a variable called computerChoice
        let computerChoice = getComputerChoice();
        // - Call playRound to determine the winner of a round.  The return value will indicate TRUE if the player wins, otherwise FALSE.
        // Store the return value in a boolean variable called result
        let result = playRound(humanChoice,computerChoice)
        if (result === "WIN") {
            // - Increment the appropriate score
            playerScore += 1
            // - Display a message to the user indicating the result of the round
            console.log(`${humanChoice} beats ${computerChoice}, you win!`)
        } else if (result === "LOSE") {
            // - Increment the appropriate score
            computerScore += 1
            // - Display a message to the user indicating the result of the round
            console.log(`${computerChoice} beats ${humanChoice}, you lose!`)
        } else {
            console.log("The result is a draw!")
        }
        round += 1
        // - Increment the appropriate score
        // - Increment the round variable
    }
    console.log(`Final Score\nPlayer: ${playerScore}\nComputer:${computerScore}`)
}

playGame()