import Node from "./ui/Node";
import Nodes from './ui/Nodes.js';

export default class NodeDragger {
  static node: Node | undefined;

  static start(node: Node) {
    this.node = node;
  }

  static move(clientX: number, clientY: number) {
    if(this.node) {
      this.node.pos = Nodes.toStageCoordinates(clientX, clientY);
    }
  }
  
  static stop() {
    this.node = undefined;
  }
}