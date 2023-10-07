import Vector from "../Vector";
import Node from "./Node";

const edgeContainer = document.getElementById('edge-container') as HTMLElement;

export default class Edge {
  private edgeView: EdgeView;
  node1: Node;
  node2: Node;

  constructor(node1: Node, node2: Node) {
    this.node1 = node1;
    this.node2 = node2;
    this.edgeView = new EdgeView(this.node1.pos, this.node2.pos);
  }

  refresh() {
    this.edgeView.update(this.node1.pos, this.node2.pos);
  }
}

class EdgeView {
  private start: Vector;
  private end: Vector;
  private line;

  constructor(start: Vector, end: Vector) {
    this.start = start;
    this.end = end;

    const line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    line.setAttribute('style', 'stroke: var(--white); stroke-width: var(--stroke-width)');
    
    edgeContainer.appendChild(line);
    this.line = line;
  }

  render() {
    this.line.setAttribute('x1', this.start.x.toString());
    this.line.setAttribute('y1', this.start.y.toString());
    this.line.setAttribute('x2', this.end.x.toString());
    this.line.setAttribute('y2', this.end.y.toString());
  }

  update(pos1: Vector, pos2: Vector) {
    this.start = pos1;
    this.end = pos2;

    this.render();
  }
}