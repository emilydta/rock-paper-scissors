let playerScore = 0;
let computerScore = 0;

const optionsArray = ["Rock", "Paper", "Scissors"];

function chooseRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function computerPlay() {
    const computerResult = chooseRandomElement(optionsArray);
    console.log("Computer: " + computerResult);
    return computerResult;  
}

function playRound(playerSelection, computerSelection = computerPlay()) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log("You: " + playerSelection);

    if (!optionsArray.includes(playerSelection)) {
        return "Error. You did not choose Rock, Paper, or Scissors.";
    } else if (playerSelection == computerSelection) {
        return "It's a tie!";
    }

    const playerWins = (playerSelection == "Rock" && computerSelection == "Scissors")
                       || (playerSelection == "Paper" && computerSelection == "Rock")
                       || (playerSelection == "Scissors" && computerSelection == "Paper");
    
    if (playerWins) {
        ++playerScore;
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        ++computerScore;
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

/**function game() {
    let i = 1;
    while (i <= 5) {
        const userInput = prompt("Rock, Paper, or Scissors?");
        console.log(playRound(userInput));
        console.log("Computer: " + computerScore);
        console.log("You: " + playerScore);
        ++i;
    }
    return "END";
}**/