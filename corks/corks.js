var l = process.argv[2];
var w = process.argv[3];
var h = process.argv[4];
var d = process.argv[5];

// console.log('l = ' + l);
// console.log('w = ' + w);
// console.log('h = ' + h);


calculateTheNumberOfCorksNeeded(l, w, h, d);


function calculateTheNumberOfCorksNeeded(l, w, h, d) {

    console.log('l = ' + l);
    console.log('w = ' + w);
    console.log('h = ' + h);
    console.log('d = ' + d);
    console.log(' ');

    var b = l * w;
    var s = l * (h - 1);
    var e = (w / 2) * h;

    var totalCorksNeeded = b + (2 * s) + (2 * e) + parseInt(d);


    console.log('b = ' + b);
    console.log('s = ' + s);
    console.log('e = ' + e);
    console.log(' ');
    console.log('totalCorksNeeded = ' + totalCorksNeeded);
    console.log(' ');
    console.log(' ');

    // return totalCorksNeeded;
}
