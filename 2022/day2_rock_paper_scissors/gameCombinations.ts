import { player1, player2 } from "./Player";

function generateCombinations(set1: string[], set2: string[]): string[][] {
  const combinations: string[][] = [];

  for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
      combinations.push([set1[i], set2[j]]);
    }
  }

  return combinations;
}

const gamePlayer1 = player1();
const gamePlayer2 = player2();

const set1: string[] = [
  gamePlayer1[0].character,
  gamePlayer1[1].character,
  gamePlayer1[2].character,
];

const set2: string[] = [
  gamePlayer2[0].character,
  gamePlayer2[1].character,
  gamePlayer2[2].character,
];

export const resultCombinations: string[][] = generateCombinations(set1, set2);
