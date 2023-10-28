import Vector from "../Vector.js";
import Node from "./Node.js";
import Edges from "./Edges.js";
import Line from "./Line.js";

export default class Edge {
  private edgeView: EdgeView;
  node1: Node;
  node2: Node;

  constructor(node1: Node, node2: Node) {
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
  private start: Vector;
  private end: Vector;
  private line: Line;

  constructor(start: Vector, end: Vector) {
    this.start = start;
    this.end = end;

    this.line =  new Line(start, end);
  }

  update(pos1: Vector, pos2: Vector) {
    this.start = pos1;
    this.end = pos2;

    this.line.update(pos1, pos2);
  }

  remove() {
    this.line.remove();
  }
}