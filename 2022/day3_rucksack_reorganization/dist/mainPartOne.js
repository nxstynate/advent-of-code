"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mainBase_1 = require("./mainBase");
const organizedData_1 = require("./organizedData");
const ruckSack = organizedData_1.testData;
// const ruckSack = finalData;
class RuckSackPartOne extends mainBase_1.RuckSackBase {
    constructor(data) {
        super(data);
    }
    matchedCharacters() {
        let matchedLettersArray = [];
        for (let array of this.data) {
            for (let characters of array) {
                const splitChar = characters.split("");
                const midpoint = Math.floor(splitChar.length / 2);
                const firstHalf = splitChar.slice(0, midpoint);
                const secondHalf = splitChar.slice(midpoint);
                const difference = firstHalf.filter(value => secondHalf.includes(value));
                const removeDoubles = Array.from(new Set(difference));
                for (let item of removeDoubles) {
                    matchedLettersArray.push(item);
                }
            }
        }
        return matchedLettersArray;
    }
}
const initClassPartOne = new RuckSackPartOne(ruckSack);
const sumResultPartOne = initClassPartOne.sumOfRuckSack();
console.log(`Rucksack Amount Part I: ${sumResultPartOne}`);
