import { mouseToStageCoordinates } from './ui/Stage.js';
import Vector from './Vector.js';
export default class NodeDragger {
    static start(node) {
        this.node = node;
    }
    static move(clientX, clientY, movementX, movementY) {
        if (this.node) {
            this.node.pos = mouseToStageCoordinates(clientX, clientY);
            this.node.vel = new Vector(movementX, movementY);
        }
    }
    static stop() {
        this.node = undefined;
    }
}
