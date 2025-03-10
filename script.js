function getComputerChoice() {
    // Create an array variable called options that contains three strings ("Rock","Paper","Scissors")
    const options = ["Rock", "Paper", "Scissors"];
    // Create a variable called randomNum of type number that will store a random number between 0 and 2 inclusive
    let randomNum = Math.floor(Math.random() * 3)
    // return the options array item that corresponds to randomNum
    return options[randomNum]
}

console.log(getComputerChoice())
