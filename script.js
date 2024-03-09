//Psuedocode
//Interface:
//  Title
//  Current Score (best of 3)
//  3 buttons, rock, paper, scissors
//  Popup display of "state"
//      Win, Loss, Tie, Try again
//
//Logic:
//  Bool: Gamestate (true = done, false = in progress)
//  Int: User throw
//  Int: Bot Throw
//
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

function CalculateWinner() {
  const result = playerThrow - cpuThrow;
  if (result == 0) {
    console.log("It is a tie pleases throw again");
    return 0;
  }
  if (Math.abs(result) == 1) {
    if (result > 0) {
      console.log();
      return 1;
    }
  }
}

function genCPUThrow(characther) {
  cpuThrow = Math.random() * 3 + 1;
}
