var database;
var form, player, game;
var gameState = 0;
var playerCount;
var allPlayers;
var canvas;
var car1, car2, car3, car4;
var cars;
function setup() {
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
    background(220);
    if (playerCount === 4) {
        game.update(1);
    }
    if (gameState === 1) {
        clear();
        game.play();
    }
}