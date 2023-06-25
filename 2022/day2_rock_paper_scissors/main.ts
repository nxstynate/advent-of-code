import { player1, player2 } from "./Player";
import { organizedData } from "./organizedData";

function findTheWinner() {
  const gameRounds = organizedData();
  const Player1 = player1();
  const Player2 = player2();

  for (let gameRound of gameRounds) {
    for (let i of Player1) {
      if (i.character === gameRound) {
        console.log("it works");
      }
      console.log("it does not work");
    }
  }
}
findTheWinner();
