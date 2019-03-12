# Milestone Project 2 - S1M0N

Simon game built on Vanilla Javascript logic. Using the standard rules of 20 x rounds. I engineered both a standard and an alternative (hard) mode. 
The Standard mode punishes errors be starting the round again. The Alternative mode restarts from the 1st round on errors. 

## UX

I wanted as clean an interface as possible so elected for square outlines for the pads. I used CSS to round the corners in a tribute to the 80s Simon electronic game. 
Any words or text were styled to include numbers (for example Simon is rendered as S1M0N). I elected to use a thinner font so as to minimise any confusion caused by this. 
Feedback re button presses, round achieved, successes and failures are presented in the middle of the game board so that the eye isn't drawn away from the action of the game itself. 
I have attached Balsamiq outputs to show the evolution of the UI. 

## Features

As mentined in the summary, the game has 2 x play modes. A reset button, and centralised feedback re the game details. 

#### Modes
I Implemnented a mode button simply "ST4ND4RD M0D3". Clicking on the button will toggle between the 2 modes. Feedback here is delivered via toggling of the button name/label. 
Access to the mode button is locked when in the middle of a game. 

#### Reset
The reset button starts the game afresh from Round 1. It was implemented via reuse of the gameStart function - this time passing an argument of "x" in order to differentiate from the 2 slightly different calls.

#### Feedback
feedback is delivered via the center of the game board. Messages advise the user to wait whilst the sequence is run, will advise of correct / incorrect guesses and other functions to keep the player updated. 

## Technologies Used    

The project uses 3 x main technologies.

HTML (inc Bootstrap) - Bootstrap was used for grid positioning only. 
CSS - Predominantly for styling and some effects on the pads
Javascript  - Javascript was used for all logic, manipulation of the DOM for game feedback. I elected to use setTimeout / setInterval for all timing loops and effects. 
            
I have included a scan of the early pseudocode for the Javascript logic. 

## Testing

The project was tested for responsivity on multiple screen sizes. The CSS, and HTML was checked via the w3 online tools.
Jasmine testing was carried out predominantly on the randum number generation functions - https://c9.io/andrewporritt/jasminetestingsimon

## Deployment 

The project is deployed via Github pages at the following link - https://andrewporritt77.github.io/Simon-Game-Javascript-/
