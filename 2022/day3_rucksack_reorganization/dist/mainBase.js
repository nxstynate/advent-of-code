"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuckSackBase = void 0;
class RuckSackBase {
    constructor(data) {
        this.assignedPoints = {};
        this.data = data;
        this.assignedPoints = this.assignNumberToCharacters();
    }
    matchedCharacters() {
        throw new Error("matchedCharacters method must be implemented in derived class.");
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
    listOfCharactersToNumbers(matchedCharacters) {
        const pointsList = [];
        for (let i in this.assignedPoints) {
            for (let j of matchedCharacters) {
                if (i === j) {
                    pointsList.push(this.assignedPoints[i]);
                }
            }
        }
        return pointsList;
    }
    sumOfRuckSack() {
        const matchedCharacters = this.matchedCharacters();
        const listOfCharacters = this.listOfCharactersToNumbers(matchedCharacters);
        const sum = listOfCharacters.reduce((a, b) => {
            return a + b;
        });
        return sum;
    }
}
exports.RuckSackBase = RuckSackBase;
