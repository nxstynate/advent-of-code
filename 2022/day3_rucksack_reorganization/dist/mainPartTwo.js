"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mainBase_1 = require("./mainBase");
const organizedData_1 = require("./organizedData");
<<<<<<< HEAD
const ruckSack = organizedData_1.testData;
=======
const ruckSack = organizedData_1.finalData;
>>>>>>> refs/remotes/origin/master
class RuckSackPartTwo extends mainBase_1.RuckSackBase {
    constructor(data) {
        super(data);
    }
    matchedCharacters() {
        const tempListA = [];
        const tempListB = [];
        const finalList = [];
        const matchedLettersArray = [];
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
                    else if (currentArrays[j][0].includes(char)) {
                        tempListA.push(char);
                    }
                }
                // if (isCommon && !matchedLettersArray.includes(char)) {
                //   tempListA.push(char);
                // }
                const reduceTempListA = tempListA.filter((letter, index) => tempListA.indexOf(letter) === index);
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
            const reduceTempListB = tempListB.filter((letter, index) => tempListB.indexOf(letter) === index);
            for (let i of reduceTempListB) {
                matchedLettersArray.push(i);
            }
            tempListA.length = 0;
            tempListB.length = 0;
        }
        console.log(matchedLettersArray);
>>>>>>> refs/remotes/origin/master
        return matchedLettersArray;
    }
}
const initClassPartTwo = new RuckSackPartTwo(ruckSack);
const sumResultPartTwo = initClassPartTwo.sumOfRuckSack();
console.log(`Rucksack Amount Part II: ${sumResultPartTwo}`);
