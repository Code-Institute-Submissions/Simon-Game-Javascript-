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
    wait();
    runLights();
}
// game board readout functions. 
function wait() {
    var wait = document.getElementById("glitch-title");
    wait.innerHTML = ("WA1T");
}

function blink() {
    var blink = document.getElementById("glitch-title");
    blink.innerHTML = ("----");
}

function play() {
    var play = document.getElementById("glitch-title");
    play.innerHTML = ("PL4Y");    
}

function correctText() {
    var correct = document.getElementById("glitch-title");
    correct.innerHTML = ("C0RRECT");    
}

function gameOver() {
    var over = document.getElementById("glitch-title");
    over.innerHTML = ("G4ME 0VER");
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
        console.log("you hit pad0");
        player.array.push(0);
        playerTurn++
        var grnFlash = document.getElementById("light0");
        grnFlash.setAttribute("class", "flasher-yellow");
        setTimeout(function(){
            grnFlash.setAttribute("class", "game-box");
            },200);
        inputCheck();
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
        inputCheck();
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
        inputCheck();
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
        inputCheck();
    }
}

//checker player sequence length vs computer sequence
function inputCheck() {
    if (player.array.length == simon.array.length) {
        checkLights();
    }
}

// Check for accuracy
function checkLights() {
    if (simon.array[playerTurn-1] == player.array[playerTurn-1]) {
        console.log("win");
// Add to maxRound and runLights again
        correctFlash();
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
        gameDetail.maxRound++;
        playerTurn = 0;
        player.array = [];
        rndNum();
    }
}

//function checkArray() {
//    if (JSON.stringify(player.array) === JSON.stringify(simon.array)){
//        console.log("winnah!"); 
//        gameDetail.maxRound++;
//        runLights();
//    } else {
//        incorrectFlash();
//        endGame();
//    }
//}

// endGame Function - output maxRound as score. 
function endGame() {
    var score  = document.getElementById("game-round");
    score.innerHTML = ("M4X R0UND " + gameDetail.maxRound);
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

// winRound - add to turn and run lights
function winRound() {
    player.turn++;
    simon.turn++;
    gameDetail.maxRound++;
    runLights();
}

