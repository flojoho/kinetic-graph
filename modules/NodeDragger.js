import Nodes from './ui/Nodes.js';
export default class NodeDragger {
    static start(node) {
        this.node = node;
    }
    static move(clientX, clientY) {
        if (this.node) {
            this.node.pos = Nodes.toStageCoordinates(clientX, clientY);
        }
    }
    static stop() {
        this.node = undefined;
    }
}
