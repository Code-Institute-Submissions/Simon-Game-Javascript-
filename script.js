// variables
var correctVer = []
var userVer = []
var round = 0
var maxRound = 1


//init
function init () {
// Step through rounds
    for (round; round <= maxRound; round++) {
    // Random number generator and array vs round
        while (correctVer.length < round) {
                var lightFlash = Math.floor(Math.random() *4);
    // Create correctVer Array
                correctVer.push(lightFlash);
                
                
                
            //   ==== Light Flash Intel
       //         var lit = document.getElementById("light"+lightFlash);
         //       lit.style.backgroundColor = "black";
      //          lit.removeAttribute("id", "lit-square");
                
        }
    }
}        

window.onload = init;


// Check correctVer.length against round 






// correctVer to userVer

// end - ourput Round