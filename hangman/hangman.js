var word = [];
word[0] = 'c';
word[1] = 'a';
word[2] = 't';

var answer = [];
var solved = false;


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

initAnswer(word);
console.log(word);
console.log(answer);

found = guess('a');
solved = isSolved();
console.log('guess: a');
console.log('found: ' + found);
console.log('answer: ' + answer);
console.log('solved: ' + solved);
console.log(' ');

found = guess('b');
solved = isSolved();
console.log('guess: b');
console.log('found: ' + found);
console.log('answer: ' + answer);
console.log('solved: ' + solved);
console.log(' ');

found = guess('t');
solved = isSolved();
console.log('guess: t');
console.log('found: ' + found);
console.log('answer: ' + answer);
console.log('solved: ' + solved);
console.log(' ');

found = guess('c');
solved = isSolved();
console.log('guess: c');
console.log('found: ' + found);
console.log('answer: ' + answer);
console.log('solved: ' + solved);
console.log(' ');
