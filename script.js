// variables
var gameDetail = {
    round : 0,
    maxRound : 1,
    altMode : false,
    
}

var correctVer = []
var userVer = []

// gameStart - resets round, maxRound, and runs lights. 
function gameStart() {
    gameDetail.round = 0
    gameDetail.maxRound = 1
    runLights()
}

// collect random light sequence
function runLights() {
    for (gameDetail.round; gameDetail.round <= gameDetail.maxRound; gameDetail.round++) {
        while (correctVer.length < gameDetail.round) {
            var lightFlash = Math.floor(Math.random() *4);
            correctVer.push(lightFlash);    
            showLights();
        }
    }
}

// Light Function
function showLights() {
    for (var i = 0; i < correctVer.length; i++) {
        
}

// player input
function userInput() {
    "#light0".onclick()
    "#light1".onclick()
    "#light2".onclick()
    "#light3".onclick()    
}

//checker player sequence length vs computer sequence
function inputCheck() {
    if (userVer.length == correctVer.length) {
        checkLights()
    }else{
        userInput()
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
        endGame()
    }
}

// endGame Function
function endGame() {
//    document.getElementById("game-round").innerHTML(gameDetail.maxRound);
}


    





