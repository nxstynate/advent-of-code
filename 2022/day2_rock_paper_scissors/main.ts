import { organizedData } from "./organizedData";
import { player } from "./Player";
import { gameResult } from "./GameTerms";

const gameSessions = organizedData();
const gamePlayers = player();
const gameResultScore = gameResult();

const columnValue1 = 0;
const columnValue2 = 1;
const columnValue3 = 2;

function sumOfItemChoice(data: string[][], value: number): number {
  let gameSessionItem: number = 0;

  for (let i = 0; i < data.length; i++) {
    const item1 = data[i][value];

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
  value1: number,
  value2: number
): number {
  const gameSessionScore: number[] = [];

  for (let i = 0; i < data.length; i++) {
    const item1 = data[i][value1];
    const item2 = data[i][value2];

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
  value1: number,
  value2: number
): string[][] {
  for (let i = 0; i < data.length; i++) {
    const item1 = data[i][value1];
    const item2 = data[i][value2];

    if (
      (item1 === gamePlayers[3].character &&
        item2 === gamePlayers[1].character) ||
      (item1 === gamePlayers[4].character &&
        item2 === gamePlayers[0].character) ||
      (item1 === gamePlayers[5].character && item2 === gamePlayers[2].character)
    ) {
      data[i].splice(2, 0, gamePlayers[0].character);
    } else if (
      (item1 === gamePlayers[3].character &&
        item2 === gamePlayers[2].character) ||
      (item1 === gamePlayers[4].character &&
        item2 === gamePlayers[1].character) ||
      (item1 === gamePlayers[5].character && item2 === gamePlayers[0].character)
    ) {
      data[i].splice(2, 0, gamePlayers[1].character);
    } else if (
      (item1 === gamePlayers[3].character &&
        item2 === gamePlayers[0].character) ||
      (item1 === gamePlayers[4].character &&
        item2 === gamePlayers[2].character) ||
      (item1 === gamePlayers[5].character && item2 === gamePlayers[1].character)
    ) {
      data[i].splice(2, 0, gamePlayers[2].character);
    } else {
      console.log("n/a");
    }
  }
  return data;
}

const secondGameSessions = appendThirdColumnItems(
  gameSessions,
  columnValue1,
  columnValue2
);

function totalScore(item1: number, item2: number): number {
  return item1 + item2;
}

console.log(
  `Part One Total Score: ${totalScore(
    sumOfItemChoice(gameSessions, columnValue2),
    sumOfGameRound(gameSessions, columnValue1, columnValue2)
  )}`
);

console.log(
  `Part Two Total Score: ${totalScore(
    sumOfItemChoice(secondGameSessions, columnValue3),
    sumOfGameRound(secondGameSessions, columnValue1, columnValue3)
  )}`
);
