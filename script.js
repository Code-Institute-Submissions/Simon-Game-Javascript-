// Objects
var gameDetail = {
    round : 0,
    maxRound : 0,
    regButton : false,
    altMode : false,
};

var player = {
    turn : 0,
    array : [],
};

var simon = {
    turn : 0,
    array : [],
};

// red glitch effect on load (also setup event listeners on load)

// glitch reset
function resetTitle() {
    var glitch = document.getElementById("glitch-title");
    glitch.setAttribute("class", "start-btn");
}

// gameStart - resets round, maxRound, and runs lights. (click function)
function gameStart() {
    gameDetail.round = 0;
    gameDetail.maxRound = 0;
    runLights();
}

// enable button presses
function allowPress() {
    gameDetail.regButton = true;
}

// check array vs round. rnd number or inputCheck
//function runLights() {
//    if (simon.array.length <= gameDetail.maxRound) {
//        rndNum();
//    } else {
//        checkLights();
//    }
//}

// rnd number - light pad and delay. 
//function rndNum() {
//    var lightFlash = Math.floor(Math.random() *4);
//        var display = document.getElementById("light" + lightFlash);
//        display.setAttribute("class", "flasher");
//        simon.array.push(lightFlash);   
//        setInterval(resetPads,500);    
//        runLights();
//}

// recursive function. 
function runLights(x) {
    if (simon.array.length >= (gameDetail.maxRound+1)) {
        allowPress();
        resetPads();
        inputCheck();
        return;
    
    } else {
    
        var lightFlash = Math.floor(Math.random() *4);
        var display = document.getElementById("light" + lightFlash);
        resetPads();
        display.setAttribute("class", "flasher");
        simon.array.push(lightFlash);   
        setTimeout(function() {
        runLights(x+1);
        }, 500);
    }
}


// reset pad lights
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

//pad entry functions
function pad0() {
    if (gameDetail.regButton == true) {
        console.log("you hit pad0");
        player.array.push(0);
        var grnFlash = document.getElementById("light0");
        grnFlash.setAttribute("class", "flasher-yellow");
        setTimeout(resetPads,100);
        inputCheck();
    }
}

function pad1() {
    if (gameDetail.regButton == true) {
        console.log("you hit pad1");
        player.array.push(1);
        var grnFlash = document.getElementById("light1");
        grnFlash.setAttribute("class", "flasher-blue");
        setTimeout(resetPads,100);
        inputCheck();
    }
}

function pad2() {
    if (gameDetail.regButton == true) {
        console.log("you hit pad2");
        player.array.push(2);
        var grnFlash = document.getElementById("light2");
        grnFlash.setAttribute("class", "flasher-red");
        setTimeout(resetPads,100);
        inputCheck();
    }
}

function pad3() {
    if (gameDetail.regButton == true) {
        console.log("you hit pad3");
        player.array.push(3);
        var grnFlash = document.getElementById("light3");
        grnFlash.setAttribute("class", "flasher-green");
        setTimeout(resetPads,100);
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
    if (simon.array[0] == player.array[0]) {
        console.log("win");
// Add to maxRound and runLights again
        correctFlash();
        gameDetail.maxRound++;
//        runLights();
    } else {
        console.log("lose");
// endGame if incorrect
        incorrectFlash();
        endGame();
       }
    }
    
// green flash background for correct button press
function correctFlash() {
    var flash = document.getElementById("b-ground");
    flash.setAttribute("class", "b-green");
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

// endGame Function - output maxRound as score. 
function endGame() {
    var score  = document.getElementById("game-round");
    score.innerHTML = (gameDetail.maxRound + 1);
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


