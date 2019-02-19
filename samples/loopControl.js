/* eslint-disable strict */
for (var i = 0; i < 5; i++) {
    console.log('\ni: ' + i);
    console.log('  Area 1');
    console.log('  Area 2');
    console.log('  Area 3');
    console.log('  Area 4');
}

for (var j = 0; j < 5; j++) {
    console.log('\nj: ' + j);
    console.log('  Area 1');

    if (j === 0) {
        console.log('  continue!');
        continue;
    }

    console.log('  Area 2');
    if (j === 1) {
        console.log('  continue!');
        continue;
    }

    console.log('  Area 3');
    if (j === 3) {
        console.log('  break!');
        break;
    }

    console.log('  Area 4');
}
