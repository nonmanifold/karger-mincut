const kargerMincut = require('./karger-mincut');
const assert = require('assert');
const chooseEdge = kargerMincut.chooseEdge;
const removeSelfLoops = kargerMincut.removeSelfLoops;
const contractEdge = kargerMincut.contractEdge;
assert.deepEqual(['0', '1'], removeSelfLoops('3', ['0', '1', '3']));
assert.deepEqual(['0', '1'], removeSelfLoops('3', ['0', '1', '3', '3']));

assert.deepEqual({1: []}, contractEdge({0: ['1'], 1: ['0']}, '0', '1'));
assert.deepEqual({0: ['1'], 1: ['0']}, contractEdge({0: ['1'], 1: ['0', '2'], 2: ['1']}, '2', '1'));
assert.deepEqual({0: ['1'], 1: ['0']}, contractEdge({0: ['1'], 1: ['0', '2'], 2: ['1']}, '2', '1'));

assert.deepEqual(['1', '0'], chooseEdge({0: ['1'], 1: ['0']}));

console.log('Pass');