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
let rock = "Rock",
    paper = "Paper",
    scissors = "Scissors";

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
