import { organizedData } from "./organizedData";

// Advent of Code: Day2 Rock Paper Scissors.
// A = Rock B = Paper C = Scissors
// X = Rock Y = Paper Z = Scissors
// Scoring: 1 pt for Rock, 2 pt for Paper, 3 pt for Scissors
// Total Score = sum of your scores for each round.
// Winner gets an additional 6 pts to the item they chose.
// Loser is 0 + the item you chose.
// Draw is 3 + the item you chose.

const importedData = organizedData;

function player1(): number[] {
  const rock: string = "A";
  const paper: string = "B";
  const scissors: string = "C";
}

function player2(): number[] {
  const rock: string = "X";
  const paper: string = "Y";
  const scissors: string = "Z";
}
