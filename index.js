const readline = require('readline');
const fs = require('fs');
const path = require('path');
const fileName = '_f370cd8b4d3482c940e4a57f489a200b_kargerMinCut.txt';
const pathName = path.join('./', fileName);
const kargerMincut = require('./karger-mincut');
const chooseEdgeRandom = kargerMincut.chooseEdgeRandom;
const chooseFirstEdge = kargerMincut.chooseFirstEdge;
const findMinCuts = kargerMincut.findMinCuts;

const nodes = {};

const counter = function (nodes) {
    const nTries = 10;
    const results = [];
    var min = Number.MAX_VALUE;
    for (var i = 0; i < nTries; i++) {
        var ithNodes = JSON.parse(JSON.stringify(nodes)); // ghetto clone
        var count = findMinCuts(ithNodes, chooseEdgeRandom);
        if (min > count) {
            min = count;
        }
        results.push(count);
    }
    console.dir(results);
    console.log('minimum:' + min);
};

const rl = readline.createInterface({
    input: fs.createReadStream(pathName)
});

rl.on('line', function (line) {
    const row = line.split("\t");
    const vertLabel = row[0];
    nodes[vertLabel] = row.slice(1, row.length - 1);// cut off first element, containing node label and las one after last TAB char
});
rl.on('close', function () {
    counter(nodes);
});