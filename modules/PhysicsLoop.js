
import Vector from './Vector.js';
import Nodes from './ui/Nodes.js';
import Edges from './ui/Edges.js';

const fps = 60;

const nodeCount = 2;
const repulsionCoefficient = 20;
const damping = 0.9;

const physicsLoop = nodes => {

  // refactor:
  // calculate new node velocities





  const accelerationVectors = nodes.map(node => new Vector (0, 0));

  for(let i = 0; i < nodes.length; i++) {
    for(let j = i + 1; j < nodes.length; j++) {
      let acceleration = nodes[j].pos.to(nodes[i].pos);
      acceleration.magnify(repulsionCoefficient / acceleration.lengthSquared());

      accelerationVectors[i].add(acceleration);
      accelerationVectors[j].subtract(acceleration);
    }
  }

  nodes = nodes.map((node, i) => {
    node.vel.add(accelerationVectors[i]);
    return node;
  })
  .map((node) => {
    node.pos.add(node.vel);
    return node;
  })
  .map(node => {
    node.vel.magnify(damping);

    return node;
  })
  .map(node => {
    node.resolveWallCollision();
  });
}

setInterval(() => {

  const nodes = Nodes.get();

  physicsLoop(nodes);

  nodes.forEach(node => node.refresh());

  Edges.get().forEach(edge => edge.refresh());

}, 1000/fps);