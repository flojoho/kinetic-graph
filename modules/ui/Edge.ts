import Vector from "../Vector.js";
import Node, {radius} from "./Node.js";
import Edges from "./Edges.js";
import Line from "./Line.js";

export type Direction = 'none' | 'to' | 'from' | 'both';

export default class Edge {
  private edgeView: EdgeView;
  node1: Node;
  node2: Node;
  direction: Direction;

  constructor(node1: Node, node2: Node, direction: Direction) {
    this.node1 = node1;
    this.node2 = node2;
    this.edgeView = new EdgeView(this.node1.pos, this.node2.pos, direction);
    this.direction = direction;

    Edges.add(this);
  }

  refresh() {
    this.edgeView.update(this.node1.pos, this.node2.pos);
  }
}

export class EdgeView {
  private start: Vector;
  private end: Vector;
  private lines: Map<string, Line>;
  private direction: Direction;

  constructor(start: Vector, end: Vector, direction: Direction) {
    this.start = start;
    this.end = end;
    this.direction = direction;

    this.lines = new Map();
    this.lines.set('base', new Line(start, end));

    if(['to', 'both'].includes(direction)) {
      this.lines.set('endRight', new Line(end, end));
      this.lines.set('endLeft', new Line(end, end));
    }
    if(['from', 'both'].includes(direction)) {
      this.lines.set('startRight', new Line(start, start));
      this.lines.set('startLeft', new Line(start, start));
    }
  }

  update(start: Vector, end: Vector) {
    this.start = start;
    this.end = end;

    const connectionVector = start.to(end);
    const unitVector = connectionVector.times(1/(connectionVector.length()));
    const arrowStart = start.plus(unitVector.times(radius));
    const arrowEnd = end.minus(unitVector.times(radius));

    const arrowLength = 20;
    const arrowAngle = 30;

    if(['to', 'both'].includes(this.direction)) {
      this.lines.get('endRight')?.update(arrowEnd, arrowEnd.minus(unitVector.times(arrowLength).rotate(arrowAngle)));
      this.lines.get('endLeft')?.update(arrowEnd, arrowEnd.minus(unitVector.times(arrowLength).rotate(-arrowAngle)));
    }
    if(['from', 'both'].includes(this.direction)) {
      this.lines.get('startRight')?.update(arrowStart, arrowStart.plus(unitVector.times(arrowLength).rotate(arrowAngle)));
      this.lines.get('startLeft')?.update(arrowStart, arrowStart.plus(unitVector.times(arrowLength).rotate(-arrowAngle)));
    }

    this.lines.get('base')?.update(start, end);
  }

  remove() {
    this.lines.forEach(line => line.remove());
  }
}