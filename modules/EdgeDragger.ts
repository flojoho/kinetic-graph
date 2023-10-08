import Edge, { EdgeView } from './ui/Edge.js';
import Nodes from './ui/Nodes.js';
import Node from './ui/Node.js';

export default class EdgeDragger {
  static edgeView: EdgeView | undefined;
  static node: Node | undefined;

  static start(node: Node) {
    this.node = node;
    this.edgeView = new EdgeView(node.pos, node.pos);
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
    if(this.node && node !== this.node) {
      new Edge(this.node, node);
    }
  }
}