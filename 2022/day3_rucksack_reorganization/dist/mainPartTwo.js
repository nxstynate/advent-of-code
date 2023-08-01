"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mainBase_1 = require("./mainBase");
const organizedData_1 = require("./organizedData");
const ruckSack = organizedData_1.testData;
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
                const reduceTempListA = tempListA.filter((letter, index) => tempListA.indexOf(letter) === index);
                for (let i of reduceTempListA) {
                    matchedLettersArray.push(i);
                    tempListA.length = 0;
                }
            }
        }
        console.log(tempListA);
        return matchedLettersArray;
    }
}
const initClassPartTwo = new RuckSackPartTwo(ruckSack);
const sumResultPartTwo = initClassPartTwo.sumOfRuckSack();
console.log(`Rucksack Amount Part II: ${sumResultPartTwo}`);
