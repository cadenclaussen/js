'use strict';
var input = require('readline-sync');

var continuePlaying = true;
while (continuePlaying === true) {

    var randomNumber = random(25); // Generate a random number

    var numberOfGuessses = 0; // Initialize loop control variable
    while (numberOfGuessses < 6) { // Loop until
        var guess = input.question('What is your guess [1-25]? ');

        // If the guess is correct, break the loop
        // If the guess is too low, request a larger guess
        // If the guess is too high, request a lower guess

        // Increment the loop control variable
        numberOfGuessses++;
    }

    // Once the game is over, determine whether to play
    // again by asking the player.
    var playAgain = input.question('Play again? [Y/n] ')
    if (playAgain !== 'n') {
        continuePlaying = true;
    }
}


// UTILITY FUNCTIONS


function random(maximumSize) {
    return (Math.floor(Math.random() * maximumSize)) + 1;
}
