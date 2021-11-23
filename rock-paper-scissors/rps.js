let playerScore = 0;
let computerScore = 0;

const computerScoreHeading = document.querySelector('#computer-score-heading');
const computerScoreNumber = document.querySelector('#computer-score-number');

const playerScoreHeading = document.querySelector('#player-score-heading');
const playerScoreNumber = document.querySelector('#player-score-number');


const rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound("Rock", computerPlay()));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound("Paper", computerPlay()));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound("Scissors", computerPlay()));

const resultMessage = document.createElement('p');
resultMessage.setAttribute("id", "result-message");
middle.appendChild(resultMessage);


const optionsArray = ["Rock", "Paper", "Scissors"];

function chooseRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function computerPlay() {
    const computerResult = chooseRandomElement(optionsArray);
    console.log("Computer: " + computerResult);
    return;  
}

function playRound(playerSelection, computerSelection = computerPlay()) {

    if (!optionsArray.includes(playerSelection)) {
        resultMessage.innerText = "Error. You did not choose Rock, Paper, or Scissors.";
        return;

    } else if (playerSelection == computerSelection) {

        resultMessage.innerText = "It's a tie!";
        playerScoreHeading.classList.remove("score-color");
        playerScoreNumber.classList.remove("score-color");
        computerScoreHeading.classList.remove("score-color");
        computerScoreNumber.classList.remove("score-color");
        return;
    }

    const playerWins = (playerSelection == "Rock" && computerSelection == "Scissors")
                       || (playerSelection == "Paper" && computerSelection == "Rock")
                       || (playerSelection == "Scissors" && computerSelection == "Paper");
    
    if (playerWins) {
        ++playerScore;
        playerScoreNumber.innerText = `${playerScore}`
        playerScoreHeading.classList.add("score-color");
        playerScoreNumber.classList.add("score-color");

        computerScoreHeading.classList.remove("score-color");
        computerScoreNumber.classList.remove("score-color");

        resultMessage.innerText = `You Win! ${playerSelection} beats ${computerSelection}!`;
        return;
        
    } else {

        ++computerScore;
        
        computerScoreNumber.innerText = `${computerScore}`;
        computerScoreHeading.classList.add("score-color");
        computerScoreNumber.classList.add("score-color");

      
        playerScoreHeading.classList.remove("score-color");
        playerScoreNumber.classList.remove("score-color");

        resultMessage.innerText = `You Lose! ${computerSelection} beats ${playerSelection}!`;
        return;
    }
}

function game() {
    /**let i = 1;
   /**  while (i <= 5) { 
        const userInput = prompt("Rock, Paper, or Scissors?");
        console.log(playRound(userInput));**/
        console.log("Computer: " + computerScore);
        console.log("You: " + playerScore);
        /**++i;**/
    
    return;
}




