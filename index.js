const readline = require('readline');
const fs = require('fs');
const path = require('path');
const fileName = '_f370cd8b4d3482c940e4a57f489a200b_kargerMinCut.txt';
const pathName = path.join('./', fileName);
const kargerMincut = require('./karger-mincut');
const nodes = [];

const counter = function (arr) {
    const comparsionsFirst = quicksorts.first(arr.slice());
    console.log('first: ' + comparsionsFirst);

    const comparsionsFinal = quicksorts.final(arr.slice());
    console.log('final: ' + comparsionsFinal);

    const comparsionsMedian = quicksorts.median(arr.slice());
    console.log('median: ' + comparsionsMedian);

};

const rl = readline.createInterface({
    input: fs.createReadStream(pathName)
});

rl.on('line', function (line) {
    const row = line.split(' ');
    const vertLabel = row[0];
    const neighbors = row.slice(1);
    nodes.push({
        label: vertLabel,
        neighbors: neighbors
    });
});
rl.on('close', function () {
    counter(nodes);
});