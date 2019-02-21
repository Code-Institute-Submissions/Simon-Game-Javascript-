// Objects
var gameDetail = {
    round : 0,
    maxRound : 0,
    regButton : false,
    altMode : false,
};

var player = {
    currentNum : 0,
    array : [],
};

var simon = {
    currentNum : 0,
    array : [],
};

var playerTurn = 0;

// gameStart/reset - resets round, maxRound, and runs lights. (click function with 0 as reset argument)
function gameStart(x) {
    gameDetail.round = 0;
    gameDetail.maxRound = 0;
    roundUpdate();
    if (x == 0){
        simon.array = [];
    }
    boardMessage("W4IT");
    runLights();

}

// mode button & functions

function modeChange() {
    if (gameDetail.regButton == false)
        if (gameDetail.altMode == false) {
            modeHard();
        } else {
            modeStandard();
        }
    }


function modeHard() {
    gameDetail.altMode = true;
    var hard = document.getElementById("mode-button");
    hard.innerHTML = ("H4RD M0D3");
}

function modeStandard() {
    gameDetail.altMode = false;
    var standard = document.getElementById("mode-button");
    standard.innerHTML = ("ST4ND4RD M0D3");
}

// round advance + update game board readout. 
function roundUpdate() {
    var round  = document.getElementById("game-round");
    round.innerHTML = ("R0UND " + (gameDetail.maxRound+1));
}

// game board readout functions. 
function boardMessage(x) {
    var board = document.getElementById("glitch-title");
    board.innerHTML = (x);
}

// enable button presses
function allowPress() {
    gameDetail.regButton = true;
    boardMessage("PL4Y");
}

// random number - push to array - runlights()
function rndNum() {
    simon.currentNum = Math.floor(Math.random() *4);
    simon.array.push(simon.currentNum);
    runLights();
}

// check array vs round. rnd number or inputCheck
function runLights() {
    if (simon.array.length <= gameDetail.maxRound) {
        rndNum();
    } else {
        showLights(playerTurn);
    }
}

// iterate through simon.array and pass to show()
function showLights(x) {
    gameDetail.regButton = false;
    if (x >= simon.array.length) {
        clearTimeout(timer);
        show(x);
        allowPress();
    } else {
        show(x);
        var timer = setTimeout(function(){
            showLights(x+1);
        },500);
    } 
}   

// adds then removes flash class to light pads. 
function show(x){ 
    var display = document.getElementById("light" + simon.array[x]);
    if (display) {
        display.setAttribute("class", "flasher");
        setTimeout(function(){
            display.setAttribute("class", "game-box");
        },500);
    }
}

//pad entry functions
function pad(x) {
    if (gameDetail.regButton == true) {
        player.array.push(x);
        playerTurn++;
        var flash = document.getElementById("light"+x);
        flash.setAttribute("class", "flasher"+x);
        setTimeout(function(){
            flash.setAttribute("class", "game-box");
            },200);
        checkLights();
    }
}

// Check for accuracy
function checkLights() {
    if (simon.array[playerTurn-1] == player.array[playerTurn-1]) {
        console.log("win");

// Add to maxRound and runLights again
        winLight();
    } else {
        console.log("lose");

// endGame if incorrect
        incorrectFlash();
        boardMessage("G4ME 0VER");
        endGame();
       }
    }
    
// green flash background for correct button press
function correctFlash() {
    var flash = document.getElementById("b-ground");
    flash.setAttribute("class", "b-green");
    boardMessage("C0RRECT");
    setTimeout(resetBack, 100);
    
}

// red flash background for erroneous presses
function incorrectFlash() {
    var flash = document.getElementById("b-ground");
    flash.setAttribute("class", "b-red");
    setTimeout(resetBack, 100);
}

// reset background colour
function resetBack() {
    var flash = document.getElementById("b-ground");
    flash.setAttribute("class", "blank");
}

function winLight() {
    if (player.array.length >= simon.array.length){
        if (simon.array.length < 20) {
            correctFlash();
            gameDetail.maxRound++;
            roundUpdate();
            playerTurn = 0;
            player.array = [];
            setTimeout (function(){
                rndNum();
                },1000);
        } else if (simon.array.length == 20) {
            boardMessage("C0NGR4T5");
        }
    }
}

// endGame Function - output maxRound as score. 
function endGame() {
    if (gameDetail.altMode == true){
        var score  = document.getElementById("game-round");
        score.innerHTML = ("M4X R0UND " + gameDetail.maxRound);
    } else {
        playerTurn = 0;
        player.array = [];
        boardMessage("TRY 4GA1N");
        setTimeout(function(){
            showLights(playerTurn);
            },1500);
    }
}

// red glitch effect on load (also setup event listeners on load)
window.onload = function() {
    var glitch = document.getElementById("glitch-title");
    glitch.setAttribute("class", "start-btn1");
    setTimeout(resetTitle, 50);
};

// glitch reset
function resetTitle() {
    var glitch = document.getElementById("glitch-title");
    glitch.setAttribute("class", "start-btn");
}