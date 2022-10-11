console.log("Hello World")

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const restartBtn = document.querySelector("#restart");

let playerScore = 0;
let computerScore = 0;
// rockBtn.addEventListener('click', function (e) {
//     console.log(e.target);
//     e.target.style.background = 'blue';
// });




/*
randomly return either 'Rock', 'Paper', or 'Scissors'
first have variables 
let rock = 'Rock'
let paper = 'Paper'
let scissors = 'Scissors'

use a random function to call either 3 of this values.
random function only calls numbers. So we have to assign numbers to variables

so have random set for 3 values
if called 0 then return rock
if called 1 then return paper
if called 2 then return scissors

*/

function getComputerChoice(){
let computerChoice = Math.floor(Math.random() * 3);
let rock = "rock",
    paper = "paper",
    scissors = "scissors";

    if(computerChoice == 0){
        return rock;
    }
    else if(computerChoice == 1){
        return paper;
    }
    else{
        return scissors;
    }
}


/*
Play a round of rock-paper-scissors
Player must input either rock, paper, scissors, case-insensitive
Set conditions of the game
*/

function playRound(playerSelection, computerSelection){
    const playerDecision = playerSelection.toLowerCase();

    let winningMessage = "You win! " + playerDecision + " beats " + computerSelection;
    let tieMessage = "You tied! "
    let lostMessage = "You lost! " + computerSelection + " beats " + playerDecision;



    if(playerDecision == "rock" && computerSelection == "rock"){
        return tieMessage;
    }
    else if(playerDecision == "rock" && computerSelection == "paper"){
        computerScore++;
        return lostMessage;
    }
    else if(playerDecision == "rock" && computerSelection == "scissors"){
        playerScore++;
        return winningMessage;
    }
    else if(playerDecision == "paper" && computerSelection == "rock"){
        playerScore++;
        return winningMessage;
    }
    else if(playerDecision == "paper" && computerSelection == "paper"){
        return tieMessage;
    }
    else if(playerDecision == "paper" && computerSelection == "scissors"){
        computerScore++;
        return lostMessage;
    }
    else if(playerDecision == "scissors" && computerSelection == "rock"){
        computerScore++;
        return lostMessage;
    }
    else if(playerDecision == "scissors" && computerSelection == "paper"){
        playerScore++;
        return winningMessage;
    }
    else if(playerDecision == "scissors" && computerSelection == "scissors"){
        return tieMessage;
    }    
}

function getMessageRock(){
    let text = playRound('rock',getComputerChoice());
    document.getElementById("message").innerText = text;
}
function getMessagePaper(){
    let text = playRound('paper',getComputerChoice());
    document.getElementById("message").innerText = text;
}
function getMessageScissors(){
    let text = playRound('scissors',getComputerChoice());
    document.getElementById("message").innerText = text;
}

function displayResult(){
    let result = "Player : " + playerScore + ", Computer:  " + computerScore;
    document.getElementById("result").innerText = result;
}

function finishGameResult(){
    let restartText = "Would you like to play again?"
    if(playerScore == 5){
        let finishResult = "Good game, you won"
        document.getElementById("result").innerText = finishResult;
        
    }
    else{
        let finishResult = "You lost, to a bot T-T"
        document.getElementById("result").innerText = finishResult;
    }
    document.getElementById("restartText").innerText = restartText;

}

displayResult();
restartBtn.hidden = true;


rockBtn.addEventListener('click', () => {
    getMessageRock();
    displayResult();
    if(playerScore >= 5 || computerScore >= 5){
        console.log(playerScore);
        finishGameResult();
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        restartBtn.hidden = false;
    }
});

paperBtn.addEventListener('click', () => {
    getMessagePaper();
    displayResult();
    if(playerScore >= 5 || computerScore >= 5){
        console.log(playerScore);
        finishGameResult();
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        restartBtn.hidden = false;
    
    }
});

scissorsBtn.addEventListener('click', () => {
    getMessageScissors();
    displayResult();
    if(playerScore >= 5 || computerScore >= 5){
        console.log(playerScore);
        finishGameResult();
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        restartBtn.hidden = false;
    }
});
restartBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    displayResult();
    document.getElementById("message").innerText = "";
    document.getElementById("restartText").innerText = "";
    restartBtn.hidden = true;
});


/*
 Runs the game in a best of 5 while keeping the score. 
 Reports the winner or loser at the end
*/
// function game(){

//     console.log("hi");

//    for(let i = 0; i < 5; i++){
//         let playerInput = prompt("Input rock, paper, or scissors");
//         let text = "Please try again";
//         if (playerInput == "rock" || playerInput == "paper" || playerInput == "scissors"){
//             console.log(playRound(playerInput, getComputerChoice()));
//         }
//         else{
//             return text;
//         }

//     }
// }
//game();



//rockBtn.addEventListener("click" , playRound(e));
