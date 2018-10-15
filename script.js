// variables
var correctVer = []
var userVer = []
var round = 0
var maxRound = 1

// runLights Function
function runLights() {
    for (round; round <= maxRound; round++) {
        while (correctVer.length < round) {
            var lightFlash = Math.floor(Math.random() *4);
            correctVer.push(lightFlash);    
        }
    }
}

function endGame() {
    document.getElementByID("game-round").innerHtml(maxRound);
}


runLights();
console.log(correctVer);

function checkLights() {
    if(correctVer == userVer) {
        maxRound++;
        runLights();
    } else {
        endGame();
    }
}