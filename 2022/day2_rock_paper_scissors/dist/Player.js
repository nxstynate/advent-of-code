"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.player = void 0;
function player() {
    const player = [
        { player: "player", character: "X", item: "rock", points: 1 },
        { player: "player", character: "Y", item: "paper", points: 2 },
        { player: "player", character: "Z", item: "scissors", points: 3 },
        { player: "opponent", character: "A", item: "rock", points: 1 },
        { player: "opponent", character: "B", item: "paper", points: 2 },
        { player: "opponent", character: "C", item: "scissors", points: 3 },
    ];
    return player;
}
exports.player = player;
