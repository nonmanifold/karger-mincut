const kargerMincut = require('./karger-mincut');
const assert = require('assert');
const chooseEdgeRandom = kargerMincut.chooseEdgeRandom;
const chooseFirstEdge = kargerMincut.chooseFirstEdge;
const removeSelfLoops = kargerMincut.removeSelfLoops;
const contractEdge = kargerMincut.contractEdge;
const findMinCuts = kargerMincut.findMinCuts;
const replaceVerexIds = kargerMincut.replaceVerexIds;

assert.deepEqual([], replaceVerexIds([], '0', '1'));
assert.deepEqual(['2', '2'], replaceVerexIds(['1', '2'], '1', '2'));
assert.deepEqual(['2', '2', '2'], replaceVerexIds(['1', '1', '2'], '1', '2'));
assert.deepEqual(['2', '2', '3'], replaceVerexIds(['1', '2', '3'], '1', '2'));

assert.deepEqual(['0', '1'], removeSelfLoops('3', ['0', '1', '3']));
assert.deepEqual(['0', '1'], removeSelfLoops('3', ['0', '1', '3', '3']));

assert.deepEqual({1: []}, contractEdge({0: ['1'], 1: ['0']}, '0', '1'));
assert.deepEqual({0: ['1'], 1: ['0']}, contractEdge({0: ['1'], 1: ['0', '2'], 2: ['1']}, '2', '1'));
assert.deepEqual({0: ['1'], 1: ['0']}, contractEdge({0: ['1'], 1: ['0', '2'], 2: ['1']}, '2', '1'));

assert.deepEqual(['0', '1'], chooseFirstEdge({0: ['1'], 1: ['0']}));

assert.equal(1, findMinCuts({0: ['1'], 1: ['0', '2'], 2: ['1']}, chooseFirstEdge));
assert.equal(3, findMinCuts({0: ['1', '3'], 1: ['0', '2', '3'], 2: ['1', '3'], 3: ['0', '1', '2']}, chooseFirstEdge));
assert.equal(1, findMinCuts({
    3: ['0', '1', '2', '4'],
    2: ['1', '3'],
    1: ['0', '0', '0', '2', '3'],
    0: ['1', '1', '1', '3'],
    4: ['3']
}, chooseFirstEdge));

assert.equal(2, findMinCuts({
    4: ['3', '0'],
    3: ['0', '1', '2', '4'],
    2: ['1', '3'],
    1: ['0', '0', '0', '2', '3'],
    0: ['1', '1', '1', '4', '3']
}, chooseFirstEdge));

assert.equal(2, findMinCuts({
    4: ['4', '3', '0'],
    3: ['0', '1', '2', '4'],
    2: ['1', '3'],
    1: ['0', '0', '0', '2', '3'],
    0: ['1', '1', '1', '4', '3']
}, chooseFirstEdge));

console.log('Pass');