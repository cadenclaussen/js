// var terrain = [ 5, 4, 3 ];
var terrain = [ 1, 5, 4, 3, 6, 7, 2, 6, 6, 2, 3, 2, 9 ];

// The altitude of the left bank of the current lake
let leftBank = 0;

// The volume of the current lake
let volume = 0;

// The total volume of all the lakes
let totalVolume = 0;

// Boolean to determine if we are currently evaluating a lake or not
let lake = false;


for (let altitude of terrain) {

    // No lake and the new altitude is the new left bank
    if (!lake && (altitude > leftBank)) {
        leftBank = altitude;
        console.log();
        console.log('Land');
        console.log('  altitude: ' + altitude);
        continue;
    }

    // No lake and we are on a plateau
    if (!lake && (altitude === leftBank)) {
        console.log();
        console.log('Land');
        console.log('  altitude: ' + altitude);
        continue;
    }

    // Lake has now just begun
    if (!lake && (altitude < leftBank)) {
        lake = true;
        volume += leftBank - altitude;
        console.log();
        console.log('Lake NEW (left bank: ' + leftBank + ')');
        console.log('  altitude: ' + altitude);
        console.log('  delta volume: ' + (leftBank - altitude));
        console.log('  volume: ' + volume);
        continue;
    }

    // We are in the middle of the lake
    if (lake && (altitude < leftBank)) {
        volume += leftBank - altitude;
        console.log();
        console.log('Lake (left bank: ' + leftBank + ')');
        console.log('  altitude: ' + altitude);
        console.log('  delta volume: ' + (leftBank - altitude));
        console.log('  volume: ' + volume);
        continue;
    }

    // We have reached the right hand shore
    if (lake && (altitude >= leftBank)) {
        lake = false;
        leftBank = altitude;
        volume += leftBank - altitude;
        totalVolume += volume;
        console.log();
        console.log('Land');
        console.log('  altitude: ' + altitude);
        volume = 0;
        continue;
    }
}


console.log();
console.log('Total volume: ' + totalVolume);
