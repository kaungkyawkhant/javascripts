console.log("logging start");

const userChoiceDisplay = document.getElementById("yourChoiceDisplay");
const computeChoiceDisplay = document.getElementById("computeChoiceDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computeChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    getComputerChoice()
    getResult()
  })
);

function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  // console.log(randNum);
  switch (randNum) {
    case 1:
      computeChoice = "Rock";
      break;
    case 2:
      computeChoice = "Paper";
      break;
    case 3:
      computeChoice = "Scissor";
      break;
    default:
      break;
  }
  console.log(computeChoice)
  computeChoiceDisplay.innerHTML = computeChoice;
}

function getResult() {
  switch (true) {
    case (computeChoice === userChoice):
      result = "Its a draw!";
      break;
    case (computeChoice === "Rock" && userChoice === "Paper"):
      result = "You win 🥳🎆";
      break;
    case (computeChoice === "Rock" && userChoice === "Scissor"):
      result = "You lose 😒";
      break;
    case (computeChoice === "Paper" && userChoice === "Scissor"):
      result = "You win 🥳🎆";
      break;
    case (computeChoice === "Paper" && userChoice === "Rock"):
      result = "You lose 😒";
      break;
    case (computeChoice === "Scissor" && userChoice === "Rock"):
      result = "You win 🥳🎆";
      break;
    case (computeChoice === "Scissor" && userChoice === "Paper"):
      result = "You lose 😒";
      break;
    default:
      break;
  }
  resultDisplay.innerHTML=result
}
