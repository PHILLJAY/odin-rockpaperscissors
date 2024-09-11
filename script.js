//Functions:
//  Calculate Winner
//      Compare user throw to bot throw
//  Bot Throw
//      Generates a random throw, can be extended to add "personalities", i.e dude who only throws rock
//  Reset Game
//      Resests gamestate
//

// TODO: Add event listeners to each button (DONE)
// TODO: Enable each button to play a round in console (DONE)
// TODO: Add function to update cpu score and human score
// TODO: Create Div for results
// TODO: Change script to update results Div
// TODO: Add div for score
// TODO: update scripts again

let humanScore = 0;
let cpuScore = 0;

//  getters and setters
function getHumanScore() {
  return humanScore;
}

function setHumanScore(newScore) {
  humanScore = newScore;
}

function getCpuScore() {
  return cpuScore;
}

function setCpuScore(newScore) {
  cpuScore = newScore;
}

function resetGame() {
  humanScore = 0;
  cpuScore = 0;
}

//Event Listeners
let cpuThrow = 0;
let playerThrow = 0;

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

const resultsDiv = document.querySelector("#resultsDiv");
const scoreDiv = document.querySelector("#scoreDiv");

rockBtn.addEventListener("click", () => {
  switch (playRound(1, getComputerChoice())) {
    case -1:
      console.log("ERROR");
      break;
    case 0:
      break;
    case 1:
      humanScore++;
      break;
    case 2:
      cpuScore++;
    default:
      break;
  }
});

paperBtn.addEventListener("click", () => {
  playRound(2, getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  playRound(3, getComputerChoice());
});
//1 = Rock
//2 = Paper
//3 = Scissors

//Paper - Rock = 1
//Scissors - Paper = 1
//Rock - Scissors = -2

console.log("Hello World");

function handToString(hand) {
  switch (parseInt(hand)) {
    case 0:
      return "undefined";
      break;

    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
    default:
      return "invalid";
      break;
  }
}

function printResult(result, playerThrow, cpuThrow) {
  if (result == 0) {
    console.log(`Tie! you both threw ${handToString(playerThrow)}`);
  } else if (result == 1) {
    console.log(
      `You win! You: ${handToString(playerThrow)} | Cpu: ${handToString(
        cpuThrow
      )}`
    );
  } else {
    `You lose. You: ${handToString(playerThrow)} | Cpu: ${handToString(
      cpuThrow
    )}`;
  }
}

function updateResult(result) {
  if (result == 1) {
    setHumanScore(getHumanScore() + 1);
  } else if (result == 2) {
    setCpuScore(getCpuScore() + 1);
  }
}

function playRound(playerThrow, cpuThrow) {
  const result = playerThrow - cpuThrow;
  if (playerThrow == 0 || cpuThrow == 0) {
    console.error("Error, one of the players has not picked rock or paper");
    console.error(`playerThrow = ${playerThrow}, cpuThrow = ${cpuThrow}`);
    return -1;
  }
  //this covers ties
  if (result == 0) {
    printResult(result, playerThrow, cpuThrow);
    return 0;
  } else if (Math.abs(result) == 1) {
    //this covers the paper-rock and scissors-paper cases
    if (result > 0) {
      printResult(result, playerThrow, cpuThrow);
      updateResult(1);
      return 1;
    } else {
      printResult(result, playerThrow, cpuThrow);
      updateResult(2);
      return 2;
    }
  } else {
    if (result < 0) {
      printResult(result, playerThrow, cpuThrow);
      updateResult(1);
      return 1;
    } else {
      printResult(result, playerThrow, cpuThrow);
      updateResult(2);
      return 2;
    }
  }
}

// function calculateWinner() {
//   const result = playerThrow - cpuThrow;
//   if (playerThrow == 0 || cpuThrow == 0) {
//     console.error("Error, one of the players has not picked rock or paper");
//     console.error(`playerThrow = ${playerThrow}, cpuThrow = ${cpuThrow}`);
//     return 0;
//   }
//   console.log(`You threw ${handToString(playerThrow)}`);
//   console.log(`The CPU threw ${handToString(cpuThrow)}`);
//   //this covers ties
//   if (result == 0) {
//     console.log("It's a tie pleases throw again");
//     return 0;
//   } else if (Math.abs(result) == 1) {
//     //this covers the paper-rock and scissors-paper cases
//     if (result > 0) {
//       console.log("You win!");
//       return 1;
//     } else {
//       console.log("You Lose :(");
//       return 2;
//     }
//   } else {
//     if (result < 0) {
//       console.log("You win!");
//       return 1;
//     } else {
//       console.log("You Lose :(");
//       return 2;
//     }
//   }
// }

function getComputerChoice(characther) {
  cpuThrow = Math.floor(Math.random() * 3 + 1);
  return cpuThrow;
}

// function playGame() {
//   console.log("Welcome to Rock paper scissors!");
//   let playerScore = 0;
//   let cpuScore = 0;
//   while (playerScore < 3 && cpuScore < 3) {
//     // Checks for valid unputs
//     while (true) {
//       const stringInput = prompt(`type rock, paper or scissors!`);
//       playerThrow = parseRockPaperScissors(stringInput);

//       if (stringInput === null) {
//         console.log("Game canceled. Goodbye!");
//         return;
//       }

//       if (isNaN(playerThrow) || playerThrow < 1 || playerThrow > 3) {
//         console.log("Invalid input. Please enter 1, 2, or 3.");
//       } else {
//         break; // Valid input, exit the loop
//       }
//     }
//     //todo: add verification the player only put 1 2 or 3
//     getComputerChoice();
//     result = calculateWinner();
//     if (result == 1) {
//       playerScore++;
//     } else if (result == 2) {
//       cpuScore++;
//     }

//     console.log(`You: ${playerScore}|| CPU: ${cpuScore}`);
//   }

//   if (playerScore == 3) {
//     console.log(`🎊YOU WIN CONGRADULATIONS🎊`);
//   } else {
//     console.log(`🥲YOU LOSE SORRY BOZO🥲`);
//   }
// }

function testStringConversion(input) {
  console.log(handToString(input));
}

/*console.log("⚠️ testing");
console.log("~~No one throws error~~");
// No throws
calculateWinner();

console.log("~~Player throws but cpu does not~~");
//player throws but CPU does not
playerThrow = 1;
calculateWinner();

console.log("~~tie scenario~~");
//calculate tie
cpuThrow = 1;
calculateWinner();

console.log("~~Player wins this one~~");
//calculate player winner
playerThrow = 2;
calculateWinner();*/

/*console.log("~~CPU wins with a rock over scissors~~");
playerThrow = 3;
cpuThrow = 1;
calculateWinner();
*/
