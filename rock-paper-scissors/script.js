console.log("Welcome to Rock, Paper, Scissors!");

let choices = ["rock", "paper", "scissors"];
let humanChoice= 0;
let computerChoice = 0;

let computerScore = 0;
let humanScore = 0;

// Constants for rotation direction
const LEFT = -1;
const RIGHT = 1;

function getComputerChoice() { 
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const selectableOptionsMessage = choices.slice(0, -1).join(", ") + " or " + choices.slice(-1); 

  let playerChoice = prompt(`Enter ${selectableOptionsMessage}:`).toLowerCase();
  while (!choices.includes(playerChoice)) {
    playerChoice = prompt(`Invalid choice. Please enter ${selectableOptionsMessage}:`).toLowerCase();
  }
  return playerChoice;
}

function titleCaseWord(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function rotateArray(array, direction) {
    if (direction < 0){
        array.push(array.shift());
    } else {
        array.unshift(array.pop());
    }

    return array;
}

function playRound(humanChoice, computerChoice) 
{
    tmp_choices = choices.slice(0); 

    /*move humanChoice to the middle of the array*/
    if(tmp_choices.indexOf(humanChoice) > 1) {
        tmp_choices = rotateArray(tmp_choices,LEFT);
    } else if(tmp_choices.indexOf(humanChoice) < 1) {
        tmp_choices = rotateArray(tmp_choices,RIGHT);
    }    

    // compare choices 
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (tmp_choices.indexOf(humanChoice) > tmp_choices.indexOf(computerChoice))
    ) {
        console.log(`You win this round! ${titleCaseWord(humanChoice)} beats ${computerChoice}!`);
        humanScore++;
    } else {
        console.log(`You lose! ${titleCaseWord(computerChoice)} beats ${humanChoice}!`);
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! You lost the game.");
    } else {
        console.log("It's a tie!");
    }
}