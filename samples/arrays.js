/* eslint-disable strict */
let colors = [ 'red', 'green', 'blue', 'white', 'black' ];

console.log('colors: ' + colors);

console.log('\nFor-Of loop over an array');
for (var color of colors) {
    console.log('color: ' + color);
}

console.log('\nFor-In loop over an array');
for (var index in colors) {
    console.log('index: ' + index);
    console.log('color: ' + colors[index]);
}
