import { RuckSackBase } from "./mainBase";
import { finalData } from "./organizedData";
<<<<<<< HEAD
import { testData } from "./organizedData";

const ruckSack = testData;
=======

const ruckSack = finalData;
>>>>>>> refs/remotes/origin/master

class RuckSackPartTwo extends RuckSackBase {
  constructor(data: string[][]) {
    super(data);
  }
  protected matchedCharacters(): string[] {
<<<<<<< HEAD
    const tempListA: string[] = [];
    const tempListB: string[] = [];
    const finalList: string[] = [];
=======
    const compareOne: string[] = [];
    const compareTwo: string[] = [];
>>>>>>> refs/remotes/origin/master
    const matchedLettersArray: string[] = [];

    for (let i = 0; i < this.data.length - 2; i += 3) {
      const currentArrays = this.data.slice(i, i + 3);

      const firstArray = currentArrays[0][0];
<<<<<<< HEAD

      for (const char of firstArray) {
        let isCommon = true;

        for (let j = 1; j < currentArrays.length; j++) {
          if (!currentArrays[j][0].includes(char)) {
            isCommon = false;
            break;
          }
        }
        if (isCommon && !matchedLettersArray.includes(char)) {
          tempListA.push(char);
        }
        const reduceTempListA = tempListA.filter(
          (letter, index) => tempListA.indexOf(letter) === index
        );

        for (let i of reduceTempListA) {
          matchedLettersArray.push(i);
          tempListA.length = 0;
        }
      }
    }
    console.log(tempListA);
=======
      const secondArray = currentArrays[1][0];
      const thirdArray = currentArrays[2][0];

      for (let charOne of firstArray) {
        for (let charTwo of secondArray) {
          if (charOne === charTwo) {
            compareOne.push(charOne);
          }
        }
      }

      for (let charThree of thirdArray) {
        for (let item of compareOne) {
          if (charThree === item) {
            compareTwo.push(charThree);
          }
        }
      }
      const reduceTempListB = compareTwo.filter(
        (letter, index) => compareTwo.indexOf(letter) === index
      );

      for (let i of reduceTempListB) {
        matchedLettersArray.push(i);
      }

      compareOne.length = 0;
      compareTwo.length = 0;
    }
    console.log(matchedLettersArray);
>>>>>>> refs/remotes/origin/master
    return matchedLettersArray;
  }
}

const initClassPartTwo = new RuckSackPartTwo(ruckSack);
const sumResultPartTwo = initClassPartTwo.sumOfRuckSack();
console.log(`Rucksack Amount Part II: ${sumResultPartTwo}`);
