var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Node_div;
import Vector from '../Vector.js';
import Properties from './Properties.js';
import NodeDragger from '../NodeDragger.js';
const nodeContainer = document.getElementById('node-container');
const stageWidth = nodeContainer.offsetWidth;
const stageHeight = nodeContainer.offsetHeight;
export default class Node {
    constructor(x, y) {
        _Node_div.set(this, null);
        if (typeof x === 'number' && typeof y === 'number') {
            this.pos = new Vector(x, y);
        }
        else {
            this.pos = new Vector(Math.random() * stageWidth, Math.random() * stageHeight);
        }
        this.vel = new Vector(0, 0);
        this.width = 150;
        this.height = 150;
        this.text = 'some text';
        this.render();
        __classPrivateFieldGet(this, _Node_div, "f").addEventListener('click', e => {
            e.stopPropagation();
            Properties.selectNode(this);
        });
        __classPrivateFieldGet(this, _Node_div, "f").addEventListener('mousedown', e => {
            e.preventDefault();
            e.stopPropagation();
            if ('node' === 'node') { // TODO: add toolbar logic
                NodeDragger.node = this;
            }
        });
        __classPrivateFieldGet(this, _Node_div, "f").addEventListener('dblclick', e => {
            e.stopPropagation();
            Properties.editText();
        });
    }
    render() {
        __classPrivateFieldSet(this, _Node_div, document.createElement('div'), "f");
        __classPrivateFieldGet(this, _Node_div, "f").classList.add('node');
        __classPrivateFieldGet(this, _Node_div, "f").style.width = `${this.width}px`;
        __classPrivateFieldGet(this, _Node_div, "f").style.height = `${this.height}px`;
        __classPrivateFieldGet(this, _Node_div, "f").textContent = this.text;
        nodeContainer.appendChild(__classPrivateFieldGet(this, _Node_div, "f"));
    }
    refresh() {
        __classPrivateFieldGet(this, _Node_div, "f").style.left = `${this.pos.x - this.width / 2}px`;
        __classPrivateFieldGet(this, _Node_div, "f").style.top = `${this.pos.y - this.height / 2}px`;
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
        __classPrivateFieldGet(this, _Node_div, "f").style.boxShadow = '0px 0px 50px var(--white)';
    }
    disableHightlight() {
        __classPrivateFieldGet(this, _Node_div, "f").style.boxShadow = 'none';
    }
    changeText(text) {
        this.text = text;
        __classPrivateFieldGet(this, _Node_div, "f").textContent = text;
    }
}
_Node_div = new WeakMap();
