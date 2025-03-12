function getComputerChoice() {
    // Create an array variable called options that contains three strings ("Rock","Paper","Scissors")
    const options = ["ROCK", "PAPER", "SCISSORS"];
    // Create a variable called randomNum of type number that will store a random number between 0 and 2 inclusive
    let randomNum = Math.floor(Math.random() * 3)
    // return the options array item that corresponds to randomNum
    return options[randomNum]
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

function playGame(humanChoice) {
    const container = document.querySelector("#container");
    const roundText = document.createElement("p");
    const playerScoreText = document.querySelector("#playerScore");
    const computerScoreText = document.querySelector("#computerScore");
    roundText.textContent = `Round: ${round}`;
    container.appendChild(roundText);

    console.log(`Round ${round}`)

    // - Call getComputerChoice and store the result in a variable called computerChoice
    let computerChoice = getComputerChoice();
    
    // - Call playRound to determine the winner of a round.  The return value will indicate TRUE if the player wins, otherwise FALSE.
    // Store the return value in a boolean variable called result
    let result = playRound(humanChoice,computerChoice)
    const roundOutcome = document.createElement("p")
    if (result === "WIN") {
        // - Increment the appropriate score
        humanScore += 1
        // - Display a message to the user indicating the result of the round
        roundOutcome.textContent = `${humanChoice} beats ${computerChoice}.  You win!`;

    } else if (result === "LOSE") {
        // - Increment the appropriate score
        computerScore += 1
        // - Display a message to the user indicating the result of the round
        roundOutcome.textContent = `${computerChoice} beats ${humanChoice}.  You lose!`;
    } else {
        roundOutcome.textContent = "The round is a draw.";
    }

    // Update DOM
    container.appendChild(roundOutcome)
    playerScoreText.textContent = `Player Score: ${humanScore}`
    computerScoreText.textContent = `Computer Score: ${computerScore}`

    // - Increment the round variable
    round += 1

    //check to see if game is over
    if (humanScore>=5 || computerScore >= 5) {
        const gameOverMessage = document.querySelector("#gameOverMessage")
        gameOverMessage.style.color = "red";
        gameOverMessage.textContent = `Game Over`;
        buttons.style.display = "none";
    }

    //Announce a winner
    console.log(`Final Score\nPlayer: ${humanScore}\nComputer:${computerScore}`)
}

let humanScore = 0;
let computerScore = 0;
let round = 1;
const buttons = document.querySelector("#buttonContainer");
buttons.addEventListener("click",(e) => playGame(e.target.id))