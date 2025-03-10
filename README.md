# odin-rps
This project will demonstrate basic JavaScript proficiency by writing a console based Rock-Paper-Scissors game.

## Algorithm
### Determine the Computer's Choice
- Create an array variable called options that contains three strings ("ROCK","PAPER","SCISSORS")
- Create a variable called computerChoice of type string that will initially be empty.
- Create a variable called randomNum of type number that will store a random number between 0 and 2 inclusive
Store options[randomNum] in computerChoice

### Get the User's Choice
- Prompt the user for a choice of "Rock, Paper, or Scissors?" and store the selection in a variable of type string called choice.

### Play a Round
- Load a variable called humanChoice with the result of a call to getHumanChoice()
- convert the humanChoice variable to all upper-case letters
- Load a variable called computerChoice with the result of a call to getComputerChoice()
- Compare humanChoice and computerChoice to determine a winner.  If they are equal, it is a draw.  Otherwise, Scissors cut paper, paper covers rock, rock breaks scissors.
- Increment either playerScore or computerScore by one based on winner of round.

### Play a Full Game
A full game is five rounds.
- Create a number variable called round which initializes at 1
- Create a number variable called playerScore which initializes at 0
- Create a number variable called computerScore which intializes at 0
- LOOP the following five times using round as the sentry variable.  If round >5 the game is over:
- Call getHumanChoice and store the result in a variable called humanChoice
- Call getComputerChoice and store the result in a variable called computerChoice
- Call PlayRound to determine the winner of a round.  The return value will indicate TRUE if the player wins, otherwise FALSE.
- display a message to the user indicating the result of the round
- increment the appropriate score
- increment the round variable