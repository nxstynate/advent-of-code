export interface Player {
  character: string;
  item: string;
  points: number;
}
export function player1(): Player[] {
  const player: Player[] = [
    { character: "X", item: "rock", points: 1 },
    { character: "Y", item: "paper", points: 2 },
    { character: "Z", item: "scissors", points: 3 },
  ];

  return player;
}

export function player2(): Player[] {
  const player: Player[] = [
    { character: "A", item: "rock", points: 1 },
    { character: "B", item: "paper", points: 2 },
    { character: "C", item: "scissors", points: 3 },
  ];

  return player;
}
