'use strict';
var input = require('readline-sync');


// Generate the random number
var randomNumber = random(25);

var guessCount = 0; // Initialize loop control variable
while (guessCount < 6) { // Loop until

    // Get the player's guess, convert it to an int
    var guessString = input.question('What is your guess [1-25]? ');
    var guess = parseInt(guessString);

    // If the guess is correct, break the loop
    if (guess === randomNumber) {
        console.log('You are right!');
        break;
    }

    // If the guess is too low/high, request a larger guess
    if (guess > randomNumber) {
        console.log('');
    } else {
        console.log('');
    }

    // Increment the loop control variable
    guessCount++;
}


// UTILITY FUNCTIONS


function random(maximumSize) {
    return (Math.floor(Math.random() * maximumSize)) + 1;
}
