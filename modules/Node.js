import Vector from './Vector.js';

export default class Node {
  constructor() {
    this.pos = new Vector(Math.random() * canvas.width, Math.random() * canvas.height);
    this.vel = new Vector(0, 0);
  }
}
