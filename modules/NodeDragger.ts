import Node from "./ui/Node";
import Nodes from './ui/Nodes.js';
import Vector from './Vector.js';

export default class NodeDragger {
  static node: Node | undefined;

  static start(node: Node) {
    this.node = node;
  }

  static move(clientX: number, clientY: number, movementX: number, movementY: number) {
    if(this.node) {
      this.node.pos = Nodes.toStageCoordinates(clientX, clientY);
      this.node.vel = new Vector(movementX, movementY);
    }
  }
  
  static stop() {
    this.node = undefined;
  }
}