import { player1, player2 } from "./Player";
import { gameResult } from "./GameTerms";
import { organizedData } from "./organizedData";
import { resultCombinations } from "./gameCombinations";

const gameSessions = organizedData();
const gameResultTerms = gameResult();
const gamePlayer1 = player1();
const gamePlayer2 = player2();

const allOutcomes: string[][] = [
  ["A", "Y"], //win
  ["B", "Z"], //win
  ["C", "X"], //win
  ["A", "Z"], //lose
  ["B", "X"], //lose
  ["C", "Y"], //lose
  ["A", "X"], //tie
  ["B", "Y"], //tie
  ["C", "Z"], //tie
];

function gameSessionItemChoice() {
  let gameSessionItem: number = 0;

  for (let i = 0; i < gameSessions.length; i++) {
    const item1 = gameSessions[i][1];

    if (item1 === "X") {
      gameSessionItem += 1;
    } else if (item1 === "Y") {
      gameSessionItem += 2;
    } else if (item1 === "Z") {
      gameSessionItem += 3;
    } else {
      gameSessionItem += 0;
    }
  }
  return gameSessionItem;
}

function gameSessionScoreOutcome() {
  const gameSessionScore: number[] = [];

  for (let i = 0; i < gameSessions.length; i++) {
    const item1 = gameSessions[i][0];
    const item2 = gameSessions[i][1];

    if (
      (item1 === "A" && item2 === "X") ||
      (item1 === "B" && item2 === "Y") ||
      (item1 === "C" && item2 === "Z")
    ) {
      gameSessionScore.push(3);
    } else if (
      (item1 === "A" && item2 === "Y") ||
      (item1 === "B" && item2 === "Z") ||
      (item1 === "C" && item2 === "X")
    ) {
      gameSessionScore.push(6);
    } else if (
      (item1 === "A" && item2 === "Z") ||
      (item1 === "B" && item2 === "X") ||
      (item1 === "C" && item2 === "Y")
    ) {
      gameSessionScore.push(0);
    } else {
      console.log("n/a");
    }
  }
  const sumSessionScore = gameSessionScore.reduce((a, b) => {
    return a + b;
  });
  return sumSessionScore;
}

function totalScore(item1: number, item2: number): number {
  return item1 + item2;
}

console.log(totalScore(gameSessionItemChoice(), gameSessionScoreOutcome()));
