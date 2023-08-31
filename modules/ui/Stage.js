import Vector from '../Vector.js';
import Node from './Node.js';

const stage = document.getElementById('stage');

const fps = 60;

const nodeCount = 10;
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

let nodes = Array(nodeCount).fill().map(node => new Node());

setInterval(() => {

  physicsLoop(nodes);

  nodes.forEach(node => node.refresh());

}, 1000/fps);

stage.addEventListener('click', e => {
  
  const rect = e.target.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  nodes.push(new Node(x, y));
});