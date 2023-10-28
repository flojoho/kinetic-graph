import Edge, { EdgeView } from './ui/Edge.js';
import Nodes from './ui/Nodes.js';
import Node from './ui/Node.js';
import { Direction } from './ui/Edge.js';

export default class EdgeDragger {
  static edgeView: EdgeView | undefined;
  static node: Node | undefined;
  static direction: Direction | undefined;

  static start(node: Node, direction: Direction) {
    this.node = node;
    this.edgeView = new EdgeView(node.pos, node.pos, direction);
    this.direction = direction;
  }

  static move(clientX: number, clientY: number) {
    if(this.edgeView && this.node) {
      this.edgeView.update(
        this.node.pos,
        Nodes.toStageCoordinates(clientX, clientY)
      );
    }
  }
  
  static stop() {
    if(this.edgeView) {
      this.edgeView.remove();
    }

    this.edgeView = undefined;
    this.node = undefined;
  }

  static finish(node: Node) {
    if(this.node && node !== this.node && this.direction) {
      new Edge(this.node, node, this.direction);
    }
  }
}