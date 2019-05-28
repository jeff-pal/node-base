'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
    console.log(inputString)
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    console.log('end')
    main();
});

function readLine() {
    return inputString[currentLine++];
}



// Complete the oddNumbers function below.
function oddNumbers(l, r) {
    if(l < 1 || l > r || r > Math.pow(10, 5)) {
      console.log("Constraints: 1 <l < 1 || l > r || r > Math.pow(10, 5)\n" + "");
    }
    else if() {

    }
    else if() {

    }
    let arr = new Array();
    let j = 0;
    for (let i = l; i <= r; i++) {
        if (i % 2) {
            arr[j] = i;
            j++;
        }
    }
    return arr;
}

function main() {

    /*
    The function fs.createWriteStream() creates a writable stream in a very simple manner.
    After a call to fs.createWriteStream with the filepath, you have a writeable stream to work with.
    */
    const ws = fs.createWriteStream("./OUTPUT_PATH");
    console.log(process.env.TEMP)
    const l = parseInt(readLine().trim(), 10);

    const r = parseInt(readLine().trim(), 10);

    const res = oddNumbers(l, r);

    console.log(res)

    ws.write(res.join('\n') + '\n');

    ws.end();
}
