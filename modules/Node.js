import Vector from './Vector.js';

const nodesDiv = document.getElementById('nodesDiv');

const stageWidth = nodesDiv.offsetWidth;
const stageHeight = nodesDiv.offsetHeight;

export default class Node {
  #div = null;
  
  constructor() {
    this.pos = new Vector(Math.random() * stageWidth, Math.random() * stageHeight);
    this.vel = new Vector(0, 0);
    this.width = 150;
    this.height = 150;
    this.render()
  }

  render() {
    this.#div = document.createElement('div');
    this.#div.classList.add('node');
    this.#div.style.width = `${this.width}px`;
    this.#div.style.height = `${this.height}px`;
    this.#div.textContent = 'here is some longer text';
    nodesDiv.appendChild(this.#div);
  }

  refresh() {
    this.#div.style.left = `${this.pos.x - this.width/2}px`;
    this.#div.style.top = `${this.pos.y - this.height/2}px`;
  }

  resolveWallCollision() {
    if(this.pos.x < this.width/2) {
      this.vel.x = 0;
      this.pos.x = -(this.pos.x - this.width/2) + this.width/2;
    }
    if(this.pos.x > (stageWidth - this.width/2)) {
      this.vel.x = 0;
      this.pos.x = (stageWidth - (this.pos.x - stageWidth + this.width/2)) - this.width/2;
    }

    if(this.pos.y < this.height/2) {
      this.vel.y = 0;
      this.pos.y = -(this.pos.y - this.height/2) + this.height/2;
    }
    if(this.pos.y > (stageHeight - this.height/2)) {
      this.vel.y = 0;
      this.pos.y = stageHeight - (this.pos.y - stageHeight + this.height/2) - this.height/2;
    }
  }
}
