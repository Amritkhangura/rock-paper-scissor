function userPlay(){
  let random = ["rock", "paper", "scissors"];
  return random[Math.floor(Math.random() * 3)];
}
function computerPlay() {
  let random = ["rock", "paper", "scissors"];
  return random[Math.floor(Math.random() * 3)];
}
userPlay();
computerPlay();

function playAround(playerSelection, computerSelection) { //plays a round of the game.
        if (playerSelection === "rock") {
            if (computerSelection === "rock") {
                return "Draw!";
            } else if (computerSelection === "paper") {
            return "Computer wins!";
            } else {
                return "User wins!";
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                return "User wins!";
            } else if (computerSelection === "paper") {
                return "Draw!";
            } else {
                return "Computer wins!";
            }
        } else {
            if (computerSelection === "rock") {
                return "Computer wins!";
            } else if (computerSelection === "paper") {
                return "User wins!";
            } else {
                return "Draw!";
            }
        }
    }
    for (let i = 0; i < 5; i++) {
console.log("points are", playAround(i));
}

const playerSelection = "paper";
console.log(playAround(playerSelection, computerSelection));
var userChoice = userPlay();
var computerSelection = computerPlay();
var result = playAround(userChoice, computerSelection)
console.log("user's choice", userChoice);
console.log("computer's choice", computerSelection);
console.log("Result is", result);
