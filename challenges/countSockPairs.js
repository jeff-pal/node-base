'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let pairMap = new Map();


    for (let i = 0; i < n; i++) {

        pairMap.set(ar[i], (pairMap.get(ar[i]) === undefined ? 0 : pairMap.get(ar[i]))+1);
    }

    var totalOfPairs = 0;
    pairMap.forEach((value, key, map) => {
        totalOfPairs += (value - (value % 2));

    })
    totalOfPairs /= 2;
    return totalOfPairs;

}

function main() {
    const ws = fs.createWriteStream("./OUTPUT_PATH");

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
