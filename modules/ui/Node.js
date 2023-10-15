import Vector from '../Vector.js';
import Properties from './Properties.js';
import NodeDragger from '../NodeDragger.js';
import EdgeDragger from '../EdgeDragger.js';
import Toolbar from './Toolbar.js';
const nodeContainer = document.getElementById('node-container');
const stageWidth = nodeContainer.offsetWidth;
const stageHeight = nodeContainer.offsetHeight;
export default class Node {
    constructor(x, y) {
        if (typeof x === 'number' && typeof y === 'number') {
            this.pos = new Vector(x, y);
        }
        else {
            this.pos = new Vector(Math.random() * stageWidth, Math.random() * stageHeight);
        }
        this.vel = new Vector(0, 0);
        this.width = 125;
        this.height = 125;
        this.text = 'some text';
        this.div = document.createElement('div');
        this.div.classList.add('node');
        this.div.style.width = `${this.width}px`;
        this.div.style.height = `${this.height}px`;
        this.div.textContent = this.text;
        nodeContainer.appendChild(this.div);
        this.div.addEventListener('click', e => {
            e.stopPropagation();
            Properties.selectNode(this);
        });
        this.div.addEventListener('mousedown', e => {
            e.preventDefault();
            e.stopPropagation();
            if (Toolbar.mode === 'node') {
                NodeDragger.start(this);
            }
            else if (Toolbar.mode === 'edge') {
                EdgeDragger.start(this);
            }
        });
        this.div.addEventListener('mouseup', e => {
            EdgeDragger.finish(this);
        });
        this.div.addEventListener('dblclick', e => {
            e.stopPropagation();
            Properties.editText();
        });
    }
    render() {
    }
    refresh() {
        this.div.style.left = `${this.pos.x - this.width / 2}px`;
        this.div.style.top = `${this.pos.y - this.height / 2}px`;
    }
    resolveWallCollision() {
        if (this.pos.x < this.width / 2) {
            this.vel.x = 0;
            this.pos.x = this.width / 2;
        }
        if (this.pos.x > (stageWidth - this.width / 2)) {
            this.vel.x = 0;
            this.pos.x = stageWidth - this.width / 2;
        }
        if (this.pos.y < this.height / 2) {
            this.vel.y = 0;
            this.pos.y = this.height / 2;
        }
        if (this.pos.y > (stageHeight - this.height / 2)) {
            this.vel.y = 0;
            this.pos.y = stageHeight - this.height / 2;
        }
    }
    enableHighlight() {
        this.div.style.boxShadow = '0px 0px 50px var(--white)';
    }
    disableHightlight() {
        this.div.style.boxShadow = 'none';
    }
    changeText(text) {
        this.text = text;
        this.div.textContent = text;
    }
}
