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

// gameStart - resets round, maxRound, and runs lights. (click function)
function gameStart() {
    gameDetail.round = 0;
    gameDetail.maxRound = 0;
    roundUpdate();
    wait();
    runLights();
}

function gameReset() {
    gameDetail.round = 0;
    gameDetail.maxRound = 0;
    roundUpdate()
    simon.array = [];
    wait();
    runLights();
    
}

// mode button & functions

function modeChange() {
    if (gameDetail.regButton == false)
        if (gameDetail.altMode == false) {
            modeHard()
        } else {
            modeStandard()
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


// game board readout functions. 
function wait() {
    var wait = document.getElementById("glitch-title");
    wait.innerHTML = ("WA1T");
}
function roundUpdate() {
    var round  = document.getElementById("game-round");
    round.innerHTML = ("R0UND " + (gameDetail.maxRound+1));
}

function blink() {
    var blink = document.getElementById("glitch-title");
    blink.innerHTML = ("----");
}
// board text updates. 
function play() {
    var play = document.getElementById("glitch-title");
    play.innerHTML = ("PL4Y");    
}

function correctText() {
    var correct = document.getElementById("glitch-title");
    correct.innerHTML = ("C0RRECT");    
}

function tryAgain() {
    var tryagn = document.getElementById("glitch-title");
    tryagn.innerHTML = ("TRY 4GA1N");
}

function gameOver() {
    var over = document.getElementById("glitch-title");
    over.innerHTML = ("G4ME 0VER");
}

function congratulations() {
    var winner = document.getElementById("glitch-title");
    winner.innerHTML = ("C0NGR4T5");     
}
// enable button presses
function allowPress() {
    gameDetail.regButton = true;
    play();
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

function userInput() {
}

//pad entry functions
function pad0() {
    if (gameDetail.regButton == true) {
        playPad0();
        player.array.push(0);
        playerTurn++
        var grnFlash = document.getElementById("light0");
        grnFlash.setAttribute("class", "flasher-yellow");
        setTimeout(function(){
            grnFlash.setAttribute("class", "game-box");
            },200);
        checkLights();
    }
}

function pad1() {
    if (gameDetail.regButton == true) {
        console.log("you hit pad1");
        player.array.push(1);
        playerTurn++
        var grnFlash = document.getElementById("light1");
        grnFlash.setAttribute("class", "flasher-blue");
        setTimeout(function(){
            grnFlash.setAttribute("class", "game-box");
            },200);
        checkLights();
    }
}

function pad2() {
    if (gameDetail.regButton == true) {
        console.log("you hit pad2");
        player.array.push(2);
        playerTurn++
        var grnFlash = document.getElementById("light2");
        grnFlash.setAttribute("class", "flasher-red");
        setTimeout(function(){
            grnFlash.setAttribute("class", "game-box");
            },200);
        checkLights();
    }
}

function pad3() {
    if (gameDetail.regButton == true) {
        console.log("you hit pad3");
        player.array.push(3);
        playerTurn++
        var grnFlash = document.getElementById("light3");
        grnFlash.setAttribute("class", "flasher-green");
        setTimeout(function(){
            grnFlash.setAttribute("class", "game-box");
            },200);
        checkLights();
    }
}

// sound functions
function playPad0() {
    var sound0 = new Audio("Sounds/0.aif");
    sound0.play();
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
        gameOver();
        endGame();
       }
    }
    
// green flash background for correct button press
function correctFlash() {
    var flash = document.getElementById("b-ground");
    flash.setAttribute("class", "b-green");
    correctText();
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
            congratulations();
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
        tryAgain()
        setTimeout (function(){
            showLights(playerTurn);
            },1000);
    }
}

// red glitch effect on load (also setup event listeners on load)
window.onload = function() {
    var glitch = document.getElementById("glitch-title");
    glitch.setAttribute("class", "start-btn1");
    setTimeout(resetTitle, 50);
    document.getElementById("light0").addEventListener("click", pad0);
    document.getElementById("light1").addEventListener("click", pad1);
    document.getElementById("light2").addEventListener("click", pad2);
    document.getElementById("light3").addEventListener("click", pad3);
};

// glitch reset
function resetTitle() {
    var glitch = document.getElementById("glitch-title");
    glitch.setAttribute("class", "start-btn");
}