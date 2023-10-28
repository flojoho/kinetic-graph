import Edge, { EdgeView } from './ui/Edge.js';
import Nodes from './ui/Nodes.js';
export default class EdgeDragger {
    static start(node, direction) {
        this.node = node;
        this.edgeView = new EdgeView(node.pos, node.pos, direction);
        this.direction = direction;
    }
    static move(clientX, clientY) {
        if (this.edgeView && this.node) {
            this.edgeView.update(this.node.pos, Nodes.toStageCoordinates(clientX, clientY));
        }
    }
    static stop() {
        if (this.edgeView) {
            this.edgeView.remove();
        }
        this.edgeView = undefined;
        this.node = undefined;
    }
    static finish(node) {
        if (this.node && node !== this.node && this.direction) {
            new Edge(this.node, node, this.direction);
        }
    }
}
