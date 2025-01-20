function getComputerChoice() {
    const options_rpc = ["Rock", "Paper", "Scissors"];
    return options_rpc[Math.floor(Math.random() * options_rpc.length)];
}

console.log(getComputerChoice());