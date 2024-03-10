//Functions:
//  Calculate Winner
//      Compare user throw to bot throw
//  Bot Throw
//      Generates a random throw, can be extended to add "personalities", i.e dude who only throws rock
//  Reset Game
//      Resests gamestate
//

let playerThrow = 0;
let cpuThrow = 0;

//1 = Rock
//2 = Paper
//3 = Scissors

//Paper - Rock = 1
//Scissors - Paper = 1
//Rock - Scissors = -2

console.log("Hello World");

function handToString(hand) {
  switch (hand) {
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

function calculateWinner() {
  const result = playerThrow - cpuThrow;
  if (playerThrow == 0 || cpuThrow == 0) {
    console.error("Error, one of the players has not picked rock or paper");
    console.error(`playerThrow = ${playerThrow}, cpuThrow = ${cpuThrow}`);
    return 0;
  }
  console.log(`You threw ${handToString(playerThrow)}`);
  console.log(`The CPU threw ${handToString(cpuThrow)}`);
  //this covers ties
  if (result == 0) {
    console.log("It's a tie pleases throw again");
    return 0;
  } else if (Math.abs(result) == 1) {
    //this covers the paper-rock and scissors-paper cases
    if (result > 0) {
      console.log("You win!");
      return 1;
    } else {
      console.log("You Lose :(");
      return 2;
    }
  } else {
    if (result < 0) {
      console.log("You win!");
      return 1;
    } else {
      console.log("You Lose :(");
      return 2;
    }
  }
}

function genCPUThrow(characther) {
  cpuThrow = Math.floor(Math.random() * 3 + 1);
  //console.log(`I have generated this number ${cpuThrow}`);
}

function playGame() {
  console.log("Welcome to Rock paper scissors!");
  playerThrow = prompt(`input 1 for rock, 2 for paper, 3 for scissors`);
  //todo: add verification the player only put 1 2 or 3
  genCPUThrow();
  calculateWinner();
  //todo: game loops if it is a tie
  //todo: display what was thrown lol
}

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
