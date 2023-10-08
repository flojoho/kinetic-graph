import Nodes from './ui/Nodes.js';
import Vector from './Vector.js';
export default class NodeDragger {
    static start(node) {
        this.node = node;
    }
    static move(clientX, clientY, movementX, movementY) {
        if (this.node) {
            this.node.pos = Nodes.toStageCoordinates(clientX, clientY);
            this.node.vel = new Vector(movementX, movementY);
        }
    }
    static stop() {
        this.node = undefined;
    }
}
