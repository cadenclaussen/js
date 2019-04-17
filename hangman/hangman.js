var input = require('readline-sync');


var word = [];
word[0] = 'b';
word[1] = 'e';
word[2] = 'a';
word[3] = 'u';
word[4] = 't';
word[5] = 'i';
word[6] = 'f';
word[7] = 'u';
word[8] = 'l';

var answer = [];
var solved = false;
var hung = false;
var misses = 0;


function initAnswer() {
    for (let i = 0; i < word.length; i++) {
        answer[i] = '_';
    }
}


function guess(letter) {
    let found = false;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            answer[i] = letter;
            found = true;
        }
    }

    return found;
}


function isSolved() {
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === '_') {
            return false;
        }
    }
    return true;
}


function updateView(misses) {
    if (misses > 0) {
        console.log(' ');
        drawStructure();
    }
    if (misses > 1) {
        drawHead();
    }
    if (misses > 2) {
        drawBody();
    }
    if (misses > 3) {
        drawLeftArm();
    }
    if (misses > 4) {
        drawRightArm();
    }
    if (misses > 5) {
        drawLeftLeg();
    }
    if (misses > 6) {
        drawRightLeg();
    }
}


function drawStructure() {
    console.log('Structure');
}


function drawHead() {
    console.log('Head');
}


function drawBody() {
    console.log('Body');
}


function drawLeftArm() {
    console.log('LeftArm');
}


function drawRightArm() {
    console.log('RightArm');
}


function drawLeftLeg() {
    console.log('LeftLeg');
}


function drawRightLeg() {
    console.log('RightLeg');
}


initAnswer(word);


while (solved === false && hung === false) {

    console.log(' ');
    console.log('answer: ' + answer);
    console.log(' ');

    let letter = input.question('Guess a letter? ');

    let found = guess(letter);

    if (found === true) {
        solved = isSolved();
    } else {
        misses = misses + 1;
        if (misses === 7) {
            hung = true;
        }

        updateView(misses);
    }
}

console.log(' ');
if (solved) {
    console.log('Congratulations!');
} else {
    console.log('Sorry!');
}
