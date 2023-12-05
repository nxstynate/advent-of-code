export class RuckSackBase {
  protected data: string[][];
  private assignedPoints: { [key: string]: number } = {};

  constructor(data: string[][]) {
    this.data = data;
    this.assignedPoints = this.assignNumberToCharacters();
  }

  protected matchedCharacters(): string[] {
    throw new Error(
      "matchedCharacters method must be implemented in derived class."
    );
  }

  private assignNumberToCharacters(): { [key: string]: number } {
    const setOfCharacterArray: string[] =
      "!abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const characterMap: { [key: string]: number } = {};

    for (let i = 0; i < setOfCharacterArray.length; i++) {
      const character = setOfCharacterArray[i];
      characterMap[character] = i;
    }
    return characterMap;
  }

  protected listOfCharactersToNumbers(matchedCharacters: string[]): number[] {
    const pointsList = [];

    for (let i in this.assignedPoints) {
      for (let j of matchedCharacters) {
        if (i === j) {
          pointsList.push(this.assignedPoints[i]);
        }
      }
    }
    return pointsList;
  }

  public sumOfRuckSack(): number {
    const matchedCharacters = this.matchedCharacters();
    const listOfCharacters = this.listOfCharactersToNumbers(matchedCharacters);
    const sum = listOfCharacters.reduce((a: number, b: number) => {
      return a + b;
    });
    return sum;
  }
}
