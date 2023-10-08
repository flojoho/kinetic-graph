import Edges from "./Edges.js";
const edgeContainer = document.getElementById('edge-container');
export default class Edge {
    constructor(node1, node2) {
        this.node1 = node1;
        this.node2 = node2;
        this.edgeView = new EdgeView(this.node1.pos, this.node2.pos);
        Edges.add(this);
    }
    refresh() {
        this.edgeView.update(this.node1.pos, this.node2.pos);
    }
}
export class EdgeView {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        const line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute('style', 'stroke: var(--white); stroke-width: var(--stroke-width)');
        edgeContainer.appendChild(line);
        this.line = line;
        this.redraw();
    }
    redraw() {
        this.line.setAttribute('x1', this.start.x.toString());
        this.line.setAttribute('y1', this.start.y.toString());
        this.line.setAttribute('x2', this.end.x.toString());
        this.line.setAttribute('y2', this.end.y.toString());
    }
    update(pos1, pos2) {
        this.start = pos1;
        this.end = pos2;
        this.redraw();
    }
    remove() {
        this.line.remove();
    }
}
