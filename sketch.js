var gameState = 0;
var playerCount = 0;
var database;
var distance = 0;
var totalPlayers;
var car1,car2;
var cars;

var game;
var form;
var player; 

function setup(){
    createCanvas(displayWidth, displayHeight);
    
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    
}

function draw(){
    background("white");

    if (playerCount === 2){
        game.update(1);
    }

    if (gameState === 1){
        clear();
        game.play();
    }

    
}
