import { player1, player2 } from "./Player";
import { organizedData } from "./organizedData";

function findTheWinner() {
  const gameRounds = organizedData();
  const gamePlayer1 = player1();
  const gamePlayer2 = player2();

  const numberAssignments: string[][] = [];

  for (let i of gameRounds) {
    for (let j of i) {
      for (let player1 of gamePlayer1) {
        for (let player2 of gamePlayer2) {
          if (player1.character || player2.character === j) {
            numberAssignments.push(player1.points);
          } else {
            console.log(false);
          }
        }
      }
    }
  }
}

findTheWinner();
