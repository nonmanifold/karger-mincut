const readline = require('readline');
const fs = require('fs');
const path = require('path');
const fileName = '_f370cd8b4d3482c940e4a57f489a200b_kargerMinCut.txt';
const pathName = path.join('./', fileName);
const kargerMincut = require('./karger-mincut');
const nodes = {};

const counter = function (nodes) {

};

const rl = readline.createInterface({
    input: fs.createReadStream(pathName)
});

rl.on('line', function (line) {
    const row = line.split(' ');
    const vertLabel = row[0];
    const neighbors = row.slice(1);
    nodes[vertLabel] = neighbors;
});
rl.on('close', function () {
    counter(nodes);
});