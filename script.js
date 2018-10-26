// variables
var gameDetail = {
    round : 0,
    maxRound : 1,
    altMode : false,
};

var correctVer = [];
var userVer = [];

// glitch effect on load
function init() {
    var glitch = document.getElementById("glitch-title");
    glitch.setAttribute("class", "start-btn1");
    setTimeout(resetTitle, 50);
}

// glitch reset
function resetTitle() {
    var glitch = document.getElementById("glitch-title");
    glitch.setAttribute("class", "start-btn");
}

// gameStart - resets round, maxRound, and runs lights. 
function gameStart() {
    gameDetail.round = 0;
    gameDetail.maxRound = 1;
    runLights();
}

// check array vs round. rnd number or inputCheck
function runLights() {
    if (correctVer.length <= gameDetail.maxRound) {
        rndNum();
    } else {
        inputCheck();
    }
}

// rnd number - light pad and delay. 
function rndNum() {
    var lightFlash = Math.floor(Math.random() *4);
        var display = document.getElementById("light" + lightFlash);
        display.setAttribute("class", "flasher");
        correctVer.push(lightFlash);   
        setTimeout(resetPads,500);    
        runLights();
}

function resetPads() {
    var pad0 = document.getElementById("light0");
    pad0.setAttribute("class", "game-box");
    var pad1 = document.getElementById("light1");
    pad1.setAttribute("class", "game-box");
    var pad2 = document.getElementById("light2");
    pad2.setAttribute("class", "game-box");
    var pad3 = document.getElementById("light3");
    pad3.setAttribute("class", "game-box");
}

function userInput() {
    
}


//checker player sequence length vs computer sequence
function inputCheck() {
    if (userVer.length == correctVer.length) {
        checkLights();
    }else{
        userInput();
    }
}

// Check for accuracy
function checkLights() {
    if (JSON.stringify(correctVer) === JSON.stringify(userVer)){
// Add to maxRound and runLights again
        gameDetail.maxRound++;
        runLights();
    } else {
// endGame if incorrect
        endGame();
        }
    }

// endGame Function
function endGame() {
//    document.getElementById("game-round").innerHTML(gameDetail.maxRound);
}

window.onload = init;


