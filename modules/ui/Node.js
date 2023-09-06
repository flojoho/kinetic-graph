import Vector from '../Vector.js';
import Properties from './Properties.js';

const nodeConatainer = document.getElementById('node-container');

const stageWidth = nodeConatainer.offsetWidth;
const stageHeight = nodeConatainer.offsetHeight;

export default class Node {
  #div = null;
  
  constructor(x, y) {
    if(typeof x === 'number' && typeof y === 'number') {
      this.pos = new Vector(x, y);
    } else {
      this.pos = new Vector(Math.random() * stageWidth, Math.random() * stageHeight);
    }
    
    this.vel = new Vector(0, 0);
    this.width = 150;
    this.height = 150;
    this.text = 'some text'
    this.render();

    this.#div.addEventListener('click', e => {
      e.stopPropagation();

      Properties.selectNode(this);
    });
    this.#div.addEventListener('dblclick', e => {
      e.stopPropagation();
      
      Properties.editText();
    });
  }

  render() {
    this.#div = document.createElement('div');
    this.#div.classList.add('node');
    this.#div.style.width = `${this.width}px`;
    this.#div.style.height = `${this.height}px`;
    this.#div.textContent = this.text;
    nodeConatainer.appendChild(this.#div);
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

  enableHighlight() {
    this.#div.style.boxShadow = '0px 0px 50px var(--white)';
  }

  disableHightlight() {
    this.#div.style.boxShadow = 'none';
  }

  changeText(text) {
    this.text = text;
    this.#div.textContent = text;
  }
}
