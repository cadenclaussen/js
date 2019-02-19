/* eslint-disable strict */
function random(maximumSize) {
    return (Math.floor(Math.random() * maximumSize)) + 1;
}

for (var i = 0; i < 5; i++) {
    var randomNumber = random(25);
    console.log('randomNumber: ' + randomNumber);
}
