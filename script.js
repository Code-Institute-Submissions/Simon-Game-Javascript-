// variables
var correctVer = []
var userVer = []
var round = 0
var maxRound = 1

// Step through rounds
for (round; round <= maxRound; round++) {
// Random number generator and array vs round
    while (correctVer.length < round) {
            var lightFlash = Math.floor(Math.random() *4);
// Create correctVer Array
            correctVer.push(lightFlash);
            var lit = document.getElementById("light"+correctVer[round]);

                    
                
    }


}
        

console.log(correctVer);


// Check correctVer.length against round 




// correctVer to lights

// correctVer to userVer

// end - ourput Round