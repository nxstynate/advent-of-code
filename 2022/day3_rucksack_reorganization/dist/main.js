"use strict";
const ruckSack = ["vJrwpWtwJgWrhcsFMMfFFhFp"];
// const ruckSack: string[] = [
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
    // TODO: BUILD THE FUNCTION OUT BELOW TO PROVIDE AN ARRAY THAT WILL COLLECT THE POINTS FROM THE MATCHES IT FINDS THROUGH THE FUNCTIONS ABOVE.
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
const assignNumber = initClass.assignNumberToCharacters();
const matched = initClass.matchedCharacters();
const result = initClass.listOfCharactersToNumbers(assignNumber, matched);
const sumResult = initClass.sumOfNumbers(result);
console.log(sumResult);
console.log(result);
// console.log(matched);
// console.log(assignNumber);
