function getComputerChoice() {
    const options_rpc = ["Rock", "Paper", "Scissors"];
    return options_rpc[Math.floor(Math.random() * options_rpc.length)];
}

function getHumanChoice() {
    let userInput = prompt("Choose between Rock, Paper or Scissors: ").toLowerCase();
    let userInputCap = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    switch (userInputCap) {
        case "Rock":
        case "Paper":
        case "Scissors":
            console.log(`User input: ${userInputCap}`);
            break;
        default:
            console.log("Error: Please enter 'Rock', 'Paper' or 'Scissors'.")
    }
}

console.log(getComputerChoice());
getHumanChoice();