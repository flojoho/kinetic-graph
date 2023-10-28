import Edges from "./Edges.js";
import Line from "./Line.js";
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
        this.line = new Line(start, end);
    }
    update(pos1, pos2) {
        this.start = pos1;
        this.end = pos2;
        this.line.update(pos1, pos2);
    }
    remove() {
        this.line.remove();
    }
}
