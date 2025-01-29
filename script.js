// Score
let humanScore = 0;
let computerScore = 0;

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
            return userInputCap;
            break;
        default:
            return null;
    }
}

function playRound(humanChoice, computerChoice) {
    const rules = {
        Rock: "Scissors", // Rock beats Scissors
        Paper: "Rock", // Paper beats Rock
        Scissors: "Paper" // Scissors beats Paper
    };

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You: "${humanChoice}" - Computer: "${computerChoice}"`);
    }
    else if (rules[humanChoice] === computerChoice) {
        console.log(`YOU won! You: "${humanChoice}" - Computer: "${computerChoice}"`);
    }
    else {
        console.log(`COMPUTER won! You: "${humanChoice}" - Computer: "${computerChoice}"`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);