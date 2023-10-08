import Vector from './Vector.js';
import Nodes from './ui/Nodes.js';
import Edges from './ui/Edges.js';
import NodeDragger from './NodeDragger.js';
const fps = 60;
const repulsionCoefficient = 100;
const attractionCoefficient = 0.002;
const damping = 0.95;
const physicsLoop = (nodes, edges) => {
    const totalForces = new Map();
    nodes.forEach(node => totalForces.set(node, new Vector(0, 0)));
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            if (nodes[i].pos.x === nodes[j].pos.x && nodes[i].pos.y === nodes[j].pos.y) {
                console.log('same');
                nodes[i].pos.add(new Vector(10 * Math.random(), 10 * Math.random()));
            }
            let acceleration = nodes[j].pos.to(nodes[i].pos);
            acceleration.magnify(repulsionCoefficient / acceleration.lengthSquared());
            totalForces.get(nodes[i]).add(acceleration);
            totalForces.get(nodes[j]).subtract(acceleration);
        }
    }
    edges.forEach(edge => {
        const { node1, node2 } = edge;
        let acceleration = node1.pos.to(node2.pos);
        acceleration.magnify(attractionCoefficient);
        totalForces.get(node1).add(acceleration);
        totalForces.get(node2).subtract(acceleration);
    });
    nodes = nodes.map((node, i) => {
        node.vel.add(totalForces.get(node));
        return node;
    })
        .map((node) => {
        if (NodeDragger.node === node)
            return node;
        node.pos.add(node.vel);
        return node;
    })
        .map(node => {
        node.vel.magnify(damping);
        return node;
    })
        .map(node => {
        node.resolveWallCollision();
        return node;
    });
};
setInterval(() => {
    const nodes = Nodes.get();
    const edges = Edges.get();
    physicsLoop(nodes, edges);
    nodes.forEach(node => node.refresh());
    edges.forEach(edge => edge.refresh());
}, 1000 / fps);
