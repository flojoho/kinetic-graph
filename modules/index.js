import Vector from './Vector.js';
import Node from './Node.js';

var canvas = document.getElementById('canvas');

var c = canvas.getContext('2d');

const fps = 60;

const nodeCount = 15;
const radius = 10;
const repulsion = 20;
const damping = 0.99;

const physicsLoop = nodes => {
  const accelerationVectors = nodes.map(node => new Vector (0, 0));

  for(let i = 0; i < nodeCount; i++) {
    for(let j = i + 1; j < nodeCount; j++) {
      let acceleration = nodes[i].pos.minus(nodes[j].pos);
      acceleration.magnify(repulsion/acceleration.lengthSquared());

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
    const { pos, vel } = node;
    if(pos.x < radius && vel.x < 0) {
      vel.x = -vel.x;
      pos.x = -(pos.x - radius) + radius;
    }
    if(pos.x > (canvas.width - radius) && vel.x > 0) {
      vel.x = -vel.x;
      pos.x = (canvas.width - (pos.x - canvas.width + radius)) - radius;
    }

    if(pos.y < radius && vel.y < 0) {
      vel.y = -vel.y;
      pos.y = -(pos.y - radius) + radius;
    }
    if(pos.y > (canvas.height - radius) && vel.y > 0) {
      vel.y = -vel.y;
      pos.y = canvas.height - (pos.y - canvas.height + radius) - radius;
    }

    return node;
  });
}

let nodes = Array(nodeCount).fill().map(node => new Node());

setInterval(() => {

  physicsLoop(nodes);

  //draw
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  nodes.map(node => {
    const { pos } = node;
    c.moveTo(pos.x + radius, pos.y);
    c.arc(pos.x, pos.y, radius, 0, 2 * Math.PI);
    //c.lineTo(canvas.width*rand3, canvas.height*rand4);
    c.fill();
  });

}, 1000/fps);
