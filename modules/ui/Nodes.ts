import Node from './Node.js';
import Edge from './Edge.js';
import Properties from './Properties.js';
import Toolbar from './Toolbar.js';
import { mouseToStageCoordinates } from './Stage.js';

const nodeContainer = document.getElementById('node-container') as HTMLElement;

const nodeCount = 2;

let nodes = Array(nodeCount).fill(0).map(node => new Node());
new Edge(nodes[0], nodes[1], 'to');

nodeContainer.addEventListener('mousedown', e => {
  e.preventDefault();

  if(Toolbar.mode === 'node') {
    const { x, y } = mouseToStageCoordinates(e.clientX, e.clientY);

    const newNode = new Node(x, y);
    
    nodes.push(newNode);
    Properties.selectNode(newNode);
    Properties.editText();
  }
});

const get = () => {
  return [...nodes];
}

export default { get };
