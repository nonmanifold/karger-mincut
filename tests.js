const kargerMincut = require('./karger-mincut');
const assert = require('assert');
const chooseEdgeRandom = kargerMincut.chooseEdgeRandom;
const chooseFirstEdge = kargerMincut.chooseFirstEdge;
const removeSelfLoops = kargerMincut.removeSelfLoops;
const contractEdge = kargerMincut.contractEdge;
const findMinCuts = kargerMincut.findMinCuts;

assert.deepEqual(['0', '1'], removeSelfLoops('3', ['0', '1', '3']));
assert.deepEqual(['0', '1'], removeSelfLoops('3', ['0', '1', '3', '3']));

assert.deepEqual({1: []}, contractEdge({0: ['1'], 1: ['0']}, '0', '1'));
assert.deepEqual({0: ['1'], 1: ['0']}, contractEdge({0: ['1'], 1: ['0', '2'], 2: ['1']}, '2', '1'));
assert.deepEqual({0: ['1'], 1: ['0']}, contractEdge({0: ['1'], 1: ['0', '2'], 2: ['1']}, '2', '1'));

assert.deepEqual(['0', '1'], chooseFirstEdge({0: ['1'], 1: ['0']}));

assert.equal(1, findMinCuts({0: ['1'], 1: ['0', '2'], 2: ['1']}, chooseFirstEdge));
assert.equal(3, findMinCuts({0: ['1', '3'], 1: ['0', '2', '3'], 2: ['1', '3'], 3: ['0', '1', '2']}, chooseFirstEdge));

console.log('Pass');