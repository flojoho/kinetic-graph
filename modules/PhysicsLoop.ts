import Vector from './Vector.js';
import Nodes from './ui/Nodes.js';
import Node from './ui/Node.js';
import Edge from './ui/Edge.js';
import Edges from './ui/Edges.js';
import NodeDragger from './NodeDragger.js';

const fps = 60;

const repulsionCoefficient = 120;
const centeringCoefficient = 0.0001;
const springCoefficient = 0.002;
const dampingCoefficient = 0.97;

const calculateNodeRepulsionForce = (node1: Node, node2: Node) => {
  const displacement = node2.pos.to(node1.pos);
  return displacement.times(repulsionCoefficient / displacement.lengthSquared());
};
const calculateEdgeForce = (node1: Node, node2: Node) => {
  const displacement = node1.pos.to(node2.pos);
  return displacement.times(springCoefficient);
};
const calculateCenteringForce = (node: Node) => {
  const originDisplacement = node.pos;
  return node.pos.times(-centeringCoefficient);
};

const physicsLoop = (nodes: Node[], edges: Edge[]) => {
  const totalForces = new Map();
  nodes.forEach(node => totalForces.set(node, new Vector(0, 0)));

  for(let i = 0; i < nodes.length; i++) {
    for(let j = i + 1; j < nodes.length; j++) {
      const node1 = nodes[i];
      const node2 = nodes[j];
      
      if(node1.pos.x === node2.pos.x && node1.pos.y === node2.pos.y) {
        console.log('same');
        node1.pos.add(new Vector(10*Math.random(), 10*Math.random()));
      }

      const repulsionForce = calculateNodeRepulsionForce(node1, node2);
      totalForces.get(node1).add(repulsionForce);
      totalForces.get(node2).subtract(repulsionForce);
    }
  }

  edges.forEach(edge => {
    const { node1, node2 } = edge;

    const edgeForce = calculateEdgeForce(node1, node2);
    totalForces.get(node1).add(edgeForce);
    totalForces.get(node2).subtract(edgeForce);
  });

  nodes.forEach(node => {
    const centeringForce = calculateCenteringForce(node);
    totalForces.get(node).add(centeringForce);
  });

  nodes = nodes.map(node => {
    node.vel.add(totalForces.get(node));
    return node;
  })
  .map(node => {
    if(NodeDragger.node === node) return node;
    node.pos.add(node.vel);
    return node;
  })
  .map(node => {
    node.vel.magnify(dampingCoefficient);
    return node;
  })
  .map(node => {
    node.resolveWallCollision();
    return node;
  });
}

setInterval(() => {
  const nodes = Nodes.get();
  const edges = Edges.get();

  physicsLoop(nodes, edges);

  nodes.forEach(node => node.refresh());
  edges.forEach(edge => edge.refresh());

}, 1000/fps);
