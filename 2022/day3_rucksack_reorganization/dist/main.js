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
    compareLines() {
        let emptyList = [];
        for (let characters of this.data) {
            const splitChar = characters.split("");
            const midpoint = Math.floor(splitChar.length / 2);
            const firstHalf = splitChar.slice(0, midpoint);
            const secondHalf = splitChar.slice(midpoint);
            for (let i of firstHalf) {
                for (let j of secondHalf) {
                    if (i === j) {
                        emptyList.push(i);
                    }
                }
            }
        }
        console.log(emptyList);
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
}
const sortThisData = new SortingData(ruckSack);
sortThisData.compareLines();
// console.log(sortThisData.assignNumberToCharacters());
