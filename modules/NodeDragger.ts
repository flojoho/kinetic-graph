import Node from "./ui/Node";
import { mouseToStageCoordinates } from './ui/Stage.js';
import Vector from './Vector.js';

export default class NodeDragger {
  static node: Node | undefined;

  static start(node: Node) {
    this.node = node;
  }

  static move(clientX: number, clientY: number, movementX: number, movementY: number) {
    if(this.node) {
      this.node.pos = mouseToStageCoordinates(clientX, clientY);
      this.node.vel = new Vector(movementX, movementY);
    }
  }
  
  static stop() {
    this.node = undefined;
  }
}
