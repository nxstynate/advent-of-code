"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const organizedData_1 = require("./organizedData");
const Player_1 = require("./Player");
const GameTerms_1 = require("./GameTerms");
const gameSessions = (0, organizedData_1.organizedData)();
const gamePlayers = (0, Player_1.player)();
const gameResultScore = (0, GameTerms_1.gameResult)();
const columnIndex1 = 0;
const columnIndex2 = 1;
const columnIndex3 = 2;
function sumOfItemChoice(data, index) {
    let gameSessionItem = 0;
    for (let i = 0; i < data.length; i++) {
        const item1 = data[i][index];
        if (item1 === gamePlayers[0].character) {
            gameSessionItem += gamePlayers[0].points;
        }
        else if (item1 === gamePlayers[1].character) {
            gameSessionItem += gamePlayers[1].points;
        }
        else if (item1 === gamePlayers[2].character) {
            gameSessionItem += gamePlayers[2].points;
        }
        else {
            gameSessionItem += 0;
        }
    }
    return gameSessionItem;
}
function sumOfGameRound(data, index1, index2) {
    const gameSessionScore = [];
    for (let i = 0; i < data.length; i++) {
        const item1 = data[i][index1];
        const item2 = data[i][index2];
        if ((item1 === gamePlayers[3].character &&
            item2 === gamePlayers[0].character) ||
            (item1 === gamePlayers[4].character &&
                item2 === gamePlayers[1].character) ||
            (item1 === gamePlayers[5].character && item2 === gamePlayers[2].character)) {
            gameSessionScore.push(gameResultScore[2].points);
        }
        else if ((item1 === gamePlayers[3].character &&
            item2 === gamePlayers[1].character) ||
            (item1 === gamePlayers[4].character &&
                item2 === gamePlayers[2].character) ||
            (item1 === gamePlayers[5].character && item2 === gamePlayers[0].character)) {
            gameSessionScore.push(gameResultScore[0].points);
        }
        else if ((item1 === gamePlayers[3].character &&
            item2 === gamePlayers[2].character) ||
            (item1 === gamePlayers[4].character &&
                item2 === gamePlayers[0].character) ||
            (item1 === gamePlayers[5].character && item2 === gamePlayers[1].character)) {
            gameSessionScore.push(gameResultScore[1].points);
        }
        else {
            console.log("n/a");
        }
    }
    const sumOfSession = gameSessionScore.reduce((a, b) => {
        return a + b;
    });
    return sumOfSession;
}
function appendThirdColumnItems(data, index1, index2, index3) {
    for (let i = 0; i < data.length; i++) {
        const item1 = data[i][index1];
        const item2 = data[i][index2];
        if ((item1 === gamePlayers[3].character &&
            item2 === gamePlayers[1].character) ||
            (item1 === gamePlayers[4].character &&
                item2 === gamePlayers[0].character) ||
            (item1 === gamePlayers[5].character && item2 === gamePlayers[2].character)) {
            data[i].splice(index3, 0, gamePlayers[0].character);
        }
        else if ((item1 === gamePlayers[3].character &&
            item2 === gamePlayers[2].character) ||
            (item1 === gamePlayers[4].character &&
                item2 === gamePlayers[1].character) ||
            (item1 === gamePlayers[5].character && item2 === gamePlayers[0].character)) {
            data[i].splice(index3, 0, gamePlayers[1].character);
        }
        else if ((item1 === gamePlayers[3].character &&
            item2 === gamePlayers[0].character) ||
            (item1 === gamePlayers[4].character &&
                item2 === gamePlayers[2].character) ||
            (item1 === gamePlayers[5].character && item2 === gamePlayers[1].character)) {
            data[i].splice(index3, 0, gamePlayers[2].character);
        }
        else {
            console.log("n/a");
        }
    }
    return data;
}
const secondGameSessions = appendThirdColumnItems(gameSessions, columnIndex1, columnIndex2, columnIndex3);
function totalScore(item1, item2) {
    return item1 + item2;
}
console.log(`Part One Total Score: ${totalScore(sumOfItemChoice(gameSessions, columnIndex2), sumOfGameRound(gameSessions, columnIndex1, columnIndex2))}`);
console.log(`Part Two Total Score: ${totalScore(sumOfItemChoice(secondGameSessions, columnIndex3), sumOfGameRound(secondGameSessions, columnIndex1, columnIndex3))}`);
