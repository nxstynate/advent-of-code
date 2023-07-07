const ruckSack: string[] = ["vJrwpWtwJgWrhcsFMMfFFhFp"];

// const ruckSack: string[] = [
//   ["vJrwpWtwJgWrhcsFMMfFFhFp"],
//   ["jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL"],
//   ["PmmdzqPrVvPwwTWBwg"],
//   ["wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn"],
//   ["ttgJtRGJQctTZtZT"],
//   ["CrZsJsPPZsGzwwsLwLmpwMDw"],
// ];

class SortingData {
  private data: string[];

  constructor(data: string[]) {
    this.data = data;
  }
  public compareLines(): any {
    let matchedLettersArray: string[] = [];

    for (let characters of this.data) {
      const splitChar = characters.split("");

      const midpoint = Math.floor(splitChar.length / 2);

      const firstHalf = splitChar.slice(0, midpoint);
      const secondHalf = splitChar.slice(midpoint);

      for (let i of firstHalf) {
        for (let j of secondHalf) {
          if (i === j) {
            matchedLettersArray.push(i);
          }
        }
      }
    }
    console.log(matchedLettersArray);
  }
  public assignNumberToCharacters() {
    const setOfCharacterArray: string[] =
      "!abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const characterMap: { [key: string]: number } = {};

    for (let i = 0; i < setOfCharacterArray.length; i++) {
      const character = setOfCharacterArray[i];
      characterMap[character] = i;
    }
    return characterMap;
  }
}

const sortThisData = new SortingData(ruckSack);
sortThisData.compareLines();
// console.log(sortThisData.assignNumberToCharacters());
