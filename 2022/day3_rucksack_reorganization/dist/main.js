"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const organizedData_1 = require("./organizedData");
const ruckSack = (0, organizedData_1.organizedData)();
// const ruckSack: string[][] = [
//   ["vJrwpWtwJgWrhcsFMMfFFhFp"],
//   ["jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL"],
//   ["PmmdzqPrVvPwwTWBwg"],
//   ["wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn"],
//   ["ttgJtRGJQctTZtZT"],
//   ["CrZsJsPPZsGzwwsLwLmpwMDw"],
// ];
class SortingData {
    constructor(data) {
        this.data = data;
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
    assignNumberToCharacters() {
        const setOfCharacterArray = "!abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        const characterMap = {};
        for (let i = 0; i < setOfCharacterArray.length; i++) {
            const character = setOfCharacterArray[i];
            characterMap[character] = i;
        }
        return characterMap;
    }
    listOfCharactersToNumbers(assignedPoints, matchingCharacters) {
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
    sumOfNumbers(arrayOfNumber) {
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
