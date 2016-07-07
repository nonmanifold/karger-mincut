function chooseEdge(nodes) {
    //choose first node
    const vertices = Object.keys(nodes);
    if (vertices.length < 2) {
        return false; //no more edges to contract
    } else {
        const rnd = Math.random();
        const sourceId = vertices[Math.floor(rnd * vertices.length)];
        const possibleEnds = nodes[sourceId];
        const targetId = possibleEnds[Math.floor(rnd * possibleEnds.length)];
        //returning pair of nodes to fuse together
        return [sourceId, targetId];
    }
}

function removeSelfLoops(vertexLabel, neighbors) {
    while (neighbors.indexOf(vertexLabel) >= 0) {
        neighbors.splice(neighbors.indexOf(vertexLabel), 1);
    }
    return neighbors; // actually, neighbors are edited in place
}

function contractEdge(nodes, sourceId, targetId) {
    const targetNeighbors = nodes[targetId];
    // first delete sourceId from target's neighbors
    removeSelfLoops(sourceId, targetNeighbors);
    // update source's neighbors to point to new target, replacing label sourceId with targetId
    const sourceNeighbors = nodes[sourceId];
    sourceNeighbors.forEach(function (neighborId) {
        const neighbor = nodes[neighborId];
        while (neighbor.indexOf(sourceId) >= 0) {
            neighbor[neighbor.indexOf(sourceId)] = targetId;
        }
    });
    // add to target's neighbors list neighbors from source's list
    Array.prototype.push.apply(targetNeighbors, sourceNeighbors);
    // remove vertex sourceId from nodes:
    delete nodes[sourceId];

    // remove possible self loops to targetId
    removeSelfLoops(targetId, targetNeighbors);
    return nodes;
}

module.exports = {
    chooseEdge: chooseEdge,
    removeSelfLoops: removeSelfLoops,
    contractEdge: contractEdge
};
