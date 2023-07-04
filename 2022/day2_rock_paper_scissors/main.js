"use strict";
exports.__esModule = true;
var organizedData_1 = require("./organizedData");
var Player_1 = require("./Player");
var GameTerms_1 = require("./GameTerms");
var gameSessions = (0, organizedData_1.organizedData)();
var gamePlayers = (0, Player_1.player)();
var gameResultScore = (0, GameTerms_1.gameResult)();
var columnValue1 = 0;
var columnValue2 = 1;
var columnValue3 = 2;
function sumOfItemChoice(data, value) {
    var gameSessionItem = 0;
    for (var i = 0; i < data.length; i++) {
        var item1 = data[i][value];
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
function sumOfGameRound(data, value1, value2) {
    var gameSessionScore = [];
    for (var i = 0; i < data.length; i++) {
        var item1 = data[i][value1];
        var item2 = data[i][value2];
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
    var sumOfSession = gameSessionScore.reduce(function (a, b) {
        return a + b;
    });
    return sumOfSession;
}
function appendThirdColumnItems(data, value1, value2) {
    for (var i = 0; i < data.length; i++) {
        var item1 = data[i][value1];
        var item2 = data[i][value2];
        if ((item1 === gamePlayers[3].character &&
            item2 === gamePlayers[1].character) ||
            (item1 === gamePlayers[4].character &&
                item2 === gamePlayers[0].character) ||
            (item1 === gamePlayers[5].character && item2 === gamePlayers[2].character)) {
            data[i].splice(2, 0, gamePlayers[0].character);
        }
        else if ((item1 === gamePlayers[3].character &&
            item2 === gamePlayers[2].character) ||
            (item1 === gamePlayers[4].character &&
                item2 === gamePlayers[1].character) ||
            (item1 === gamePlayers[5].character && item2 === gamePlayers[0].character)) {
            data[i].splice(2, 0, gamePlayers[1].character);
        }
        else if ((item1 === gamePlayers[3].character &&
            item2 === gamePlayers[0].character) ||
            (item1 === gamePlayers[4].character &&
                item2 === gamePlayers[2].character) ||
            (item1 === gamePlayers[5].character && item2 === gamePlayers[1].character)) {
            data[i].splice(2, 0, gamePlayers[2].character);
        }
        else {
            console.log("n/a");
        }
    }
    return data;
}
var secondGameSessions = appendThirdColumnItems(gameSessions, columnValue1, columnValue2);
function totalScore(item1, item2) {
    return item1 + item2;
}
console.log("Part One Total Score: ".concat(totalScore(sumOfItemChoice(gameSessions, columnValue2), sumOfGameRound(gameSessions, columnValue1, columnValue2))));
console.log("Part Two Total Score: ".concat(totalScore(sumOfItemChoice(secondGameSessions, columnValue3), sumOfGameRound(secondGameSessions, columnValue1, columnValue3))));
