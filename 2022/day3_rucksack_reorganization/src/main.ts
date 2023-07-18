import { organizedData } from "./organizedData";

const ruckSack = organizedData();
// const ruckSack: string[][] = [
//   ["vJrwpWtwJgWrhcsFMMfFFhFp"],
//   ["jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL"],
//   ["PmmdzqPrVvPwwTWBwg"],
//   ["wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn"],
//   ["ttgJtRGJQctTZtZT"],
//   ["CrZsJsPPZsGzwwsLwLmpwMDw"],
// ];

class SortingData {
  private data: string[][];

  constructor(data: string[][]) {
    this.data = data;
  }
  public matchedCharacters(): string[] {
    let matchedLettersArray: string[] = [];

    for (let array of this.data) {
      for (let characters of array) {
        const splitChar = characters.split("");

        const midpoint = Math.floor(splitChar.length / 2);

        const firstHalf = splitChar.slice(0, midpoint);
        const secondHalf = splitChar.slice(midpoint);

        const difference = firstHalf.filter(value =>
          secondHalf.includes(value)
        );
        const removeDoubles = Array.from(new Set(difference));
        for (let item of removeDoubles) {
          matchedLettersArray.push(item);
        }
      }
    }
    return matchedLettersArray;
  }

  public assignNumberToCharacters(): any {
    const setOfCharacterArray: string[] =
      "!abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const characterMap: { [key: string]: number } = {};

    for (let i = 0; i < setOfCharacterArray.length; i++) {
      const character = setOfCharacterArray[i];
      characterMap[character] = i;
    }
    return characterMap;
  }

  public listOfCharactersToNumbers(
    assignedPoints: number[],
    matchingCharacters: string[]
  ): any {
    let pointsList = [];

    for (let i in assignedPoints) {
      for (let j of matchingCharacters) {
        if (i === j) {
          pointsList.push(assignedPoints[i]);
        }
      }
    }
    return pointsList;
  }

  public sumOfNumbers(arrayOfNumber: number[]): number {
    const sum = arrayOfNumber.reduce((a, b) => {
      return a + b;
    });
    return sum;
  }
}

const initClass = new SortingData(ruckSack);
const matched = initClass.matchedCharacters();
const assignNumber = initClass.assignNumberToCharacters();
const result = initClass.listOfCharactersToNumbers(assignNumber, matched);
const sumResult = initClass.sumOfNumbers(result);

console.log(matched);
// console.log(assignNumber);
// console.log(result);
console.log(sumResult);
