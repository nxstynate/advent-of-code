import { organizedData } from "./organizedData";
import { player } from "./Player";
import { gameResult } from "./GameTerms";

const gameSessions = organizedData();
const gamePlayers = player();
const gameResultScore = gameResult();

const columnIndex1 = 0;
const columnIndex2 = 1;
const columnIndex3 = 2;

function sumOfItemChoice(data: string[][], index: number): number {
  let gameSessionItem: number = 0;

  for (let i = 0; i < data.length; i++) {
    const item1 = data[i][index];

    if (item1 === gamePlayers[0].character) {
      gameSessionItem += gamePlayers[0].points;
    } else if (item1 === gamePlayers[1].character) {
      gameSessionItem += gamePlayers[1].points;
    } else if (item1 === gamePlayers[2].character) {
      gameSessionItem += gamePlayers[2].points;
    } else {
      gameSessionItem += 0;
    }
  }
  return gameSessionItem;
}

function sumOfGameRound(
  data: string[][],
  index1: number,
  index2: number
): number {
  const gameSessionScore: number[] = [];

  for (let i = 0; i < data.length; i++) {
    const item1 = data[i][index1];
    const item2 = data[i][index2];

    if (
      (item1 === gamePlayers[3].character &&
        item2 === gamePlayers[0].character) ||
      (item1 === gamePlayers[4].character &&
        item2 === gamePlayers[1].character) ||
      (item1 === gamePlayers[5].character && item2 === gamePlayers[2].character)
    ) {
      gameSessionScore.push(gameResultScore[2].points);
    } else if (
      (item1 === gamePlayers[3].character &&
        item2 === gamePlayers[1].character) ||
      (item1 === gamePlayers[4].character &&
        item2 === gamePlayers[2].character) ||
      (item1 === gamePlayers[5].character && item2 === gamePlayers[0].character)
    ) {
      gameSessionScore.push(gameResultScore[0].points);
    } else if (
      (item1 === gamePlayers[3].character &&
        item2 === gamePlayers[2].character) ||
      (item1 === gamePlayers[4].character &&
        item2 === gamePlayers[0].character) ||
      (item1 === gamePlayers[5].character && item2 === gamePlayers[1].character)
    ) {
      gameSessionScore.push(gameResultScore[1].points);
    } else {
      console.log("n/a");
    }
  }
  const sumOfSession = gameSessionScore.reduce((a, b) => {
    return a + b;
  });
  return sumOfSession;
}

function appendThirdColumnItems(
  data: string[][],
  index1: number,
  index2: number,
  index3: number
): string[][] {
  for (let i = 0; i < data.length; i++) {
    const item1 = data[i][index1];
    const item2 = data[i][index2];

    if (
      (item1 === gamePlayers[3].character &&
        item2 === gamePlayers[1].character) ||
      (item1 === gamePlayers[4].character &&
        item2 === gamePlayers[0].character) ||
      (item1 === gamePlayers[5].character && item2 === gamePlayers[2].character)
    ) {
      data[i].splice(index3, 0, gamePlayers[0].character);
    } else if (
      (item1 === gamePlayers[3].character &&
        item2 === gamePlayers[2].character) ||
      (item1 === gamePlayers[4].character &&
        item2 === gamePlayers[1].character) ||
      (item1 === gamePlayers[5].character && item2 === gamePlayers[0].character)
    ) {
      data[i].splice(index3, 0, gamePlayers[1].character);
    } else if (
      (item1 === gamePlayers[3].character &&
        item2 === gamePlayers[0].character) ||
      (item1 === gamePlayers[4].character &&
        item2 === gamePlayers[2].character) ||
      (item1 === gamePlayers[5].character && item2 === gamePlayers[1].character)
    ) {
      data[i].splice(index3, 0, gamePlayers[2].character);
    } else {
      console.log("n/a");
    }
  }
  return data;
}

const secondGameSessions = appendThirdColumnItems(
  gameSessions,
  columnIndex1,
  columnIndex2,
  columnIndex3
);

function totalScore(item1: number, item2: number): number {
  return item1 + item2;
}

console.log(
  `Part One Total Score: ${totalScore(
    sumOfItemChoice(gameSessions, columnIndex2),
    sumOfGameRound(gameSessions, columnIndex1, columnIndex2)
  )}`
);

console.log(
  `Part Two Total Score: ${totalScore(
    sumOfItemChoice(secondGameSessions, columnIndex3),
    sumOfGameRound(secondGameSessions, columnIndex1, columnIndex3)
  )}`
);
