////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

//Global Variables
var winner = "";
var playerMove = "";
var computerMove = "";

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
        winner = "tie";
    }
    else if (playerMove === "rock") {
        if (computerMove === "paper") {
            winner = "computer";
        } else if (computerMove === "scissors") {
            winner = "player";
        }
    }
    else if (playerMove === "scissors") {
        if (computerMove === "paper") {
            winner = "player";
        } else if (computerMove === "rock") {
            winner = "computer";
        }
    }
    else if (playerMove === "paper") {
        if (computerMove === "rock") {
            winner = "player";
        } else if (computerMove === "scissors") {
            winner = "computer";
        }
    }
    return winner;
}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove,computerMove);
        
        if (winner === "player") {
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '. Player won!!!');
            playerWins++;
        }
        else if (winner === "computer") {
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '. Computer won!!!');
            computerWins++;
            }
        else if (winner === "tie") {
            console.log("This was a tie...");
        }
        console.log('Player: ' + playerWins + ', Computer: ' + computerWins + '.');
    }
    return [playerWins, computerWins];
}