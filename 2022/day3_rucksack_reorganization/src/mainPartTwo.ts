import { RuckSackBase } from "./mainBase";
import { finalData } from "./organizedData";
import { testData } from "./organizedData";

const ruckSack = finalData;

class RuckSackPartTwo extends RuckSackBase {
  constructor(data: string[][]) {
    super(data);
  }
  protected matchedCharacters(): string[] {
    const tempListA: string[] = [];
    const tempListB: string[] = [];
    const finalList: string[] = [];
    const matchedLettersArray: string[] = [];

    for (let i = 0; i < this.data.length - 2; i += 3) {
      const currentArrays = this.data.slice(i, i + 3);

      const firstArray = currentArrays[0][0];
      const secondArray = currentArrays[1][0];
      const thirdArray = currentArrays[2][0];

      for (let charOne of firstArray) {
        for (let charTwo of secondArray) {
          if (charOne === charTwo) {
            tempListA.push(charOne);
          }
        }
      }

      for (let charThree of thirdArray) {
        for (let item of tempListA) {
          if (charThree === item) {
            tempListB.push(charThree);
          }
        }
      }
      const reduceTempListB = tempListB.filter(
        (letter, index) => tempListB.indexOf(letter) === index
      );

      for (let i of reduceTempListB) {
        matchedLettersArray.push(i);
      }

      tempListA.length = 0;
      tempListB.length = 0;
    }
    console.log(matchedLettersArray);
    return matchedLettersArray;
  }
}

const initClassPartTwo = new RuckSackPartTwo(ruckSack);
const sumResultPartTwo = initClassPartTwo.sumOfRuckSack();
console.log(`Rucksack Amount Part II: ${sumResultPartTwo}`);
