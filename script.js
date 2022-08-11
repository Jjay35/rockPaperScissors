console.log("Hello World")

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
        return lostMessage;
    }
    else if(playerDecision == "rock" && computerSelection == "scissors"){
        return winningMessage;
    }
    else if(playerDecision == "paper" && computerSelection == "rock"){
        return winningMessage;
    }
    else if(playerDecision == "paper" && computerSelection == "paper"){
        return tieMessage;
    }
    else if(playerDecision == "paper" && computerSelection == "scissors"){
        return lostMessage;
    }
    else if(playerDecision == "scissors" && computerSelection == "rock"){
        return lostMessage;
    }
    else if(playerDecision == "scissors" && computerSelection == "paper"){
        return winningMessage;
    }
    else if(playerDecision == "scissors" && computerSelection == "scissors"){
        return tieMessage;
    }
        
}


/*
 Runs the game in a best of 5 while keeping the score. 
 Reports the winner or loser at the end
*/
function game(){

    for(let i = 0; i < 5; i++){
        let playerInput = prompt("Input rock, paper, or scissors");
        let text = "Please try again";
        if (playerInput == "rock" || playerInput == "paper" || playerInput == "scissors"){
            console.log(playRound(playerInput, getComputerChoice()));
        }
        else{
            return text;
        }

    }
}

game();


