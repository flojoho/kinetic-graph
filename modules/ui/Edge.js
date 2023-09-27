var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Edge_line;
const edgeContainer = document.getElementById('edge-container');
export default class Edge {
    constructor(node1, node2) {
        _Edge_line.set(this, void 0);
        this.node1 = node1;
        this.node2 = node2;
    }
    render() {
        const line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute('style', 'stroke: var(--white); stroke-width: var(--stroke-width)');
        edgeContainer.appendChild(line);
        __classPrivateFieldSet(this, _Edge_line, line, "f");
    }
    refresh() {
        __classPrivateFieldGet(this, _Edge_line, "f").setAttribute('x1', this.node1.pos.x);
        __classPrivateFieldGet(this, _Edge_line, "f").setAttribute('y1', this.node1.pos.y);
        __classPrivateFieldGet(this, _Edge_line, "f").setAttribute('x2', this.node2.pos.x);
        __classPrivateFieldGet(this, _Edge_line, "f").setAttribute('y2', this.node2.pos.y);
    }
}
_Edge_line = new WeakMap();
