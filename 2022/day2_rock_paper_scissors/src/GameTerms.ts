export interface GameResult {
  gameResult: string;
  points: number;
}
export function gameResult(): GameResult[] {
  const gameTerms: GameResult[] = [
    { gameResult: "Win", points: 6 },
    { gameResult: "Lose", points: 0 },
    { gameResult: "Draw", points: 3 },
  ];

  return gameTerms;
}
