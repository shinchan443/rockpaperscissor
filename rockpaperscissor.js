// get computer choice
function getComputerChoice() {
  // calculate random number from 1 - 3
  let randomNum = Math.floor(Math.random() * 3) + 1;

  // If Else return to right string
  switch (randomNum) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissor";
  }
}

// get user choice
function getUserChoice() {
  // get user choice from prompt
  let userChoice = prompt(`Choose 1-3: 
    1:rock
    2:paper
    3:scissor`);
  // switch to convert userChoice to string
  switch (parseInt(userChoice)) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissor";
  }
}
// declare score
let userScore = 0;
let computerScore = 0;
// logic to play single round
function playRound(computer, user) {
  if (computer === user) {
    console.log(
      `Draw!, your choice is ${user} and computer choice is ${computer}`
    );
  } else if (
    (computer == "rock" && user == "paper") ||
    (computer == "scissor" && user == "paper") ||
    (computer == "paper" && user == "rock")
  ) {
    console.log(`You lose! ${computer} beat ${user}`);
    computerScore++;
  } else {
    console.log(`You win! ${user} beat ${computer}`);
    userScore++;
  }
}

// logic to play entire game
function playGame() {
  let i = 0;
  while (i < 5) {
    playRound(getComputerChoice(), getUserChoice());
    i++;
  }
  if (userScore > computerScore) {
    console.log(
      `You win the game! your score is ${userScore} and the computer score is ${computerScore}`
    );
  } else if (userScore < computerScore) {
    console.log(
      `You lose the game! your score is ${userScore} and the computer score is ${computerScore}`
    );
  } else {
    console.log(
      `Draw! your score is ${userScore} and the computer score is ${computerScore}`
    );
  }
}

playGame()