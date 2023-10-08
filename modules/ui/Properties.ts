import Nodes from './Nodes.js';
import Node from './Node.js';

const nodeText = document.getElementById('node-text') as HTMLInputElement;

let selectedNode: Node;

const selectNode = (node: Node) => {
  selectedNode = node;

  Nodes.get().forEach(node => node.disableHightlight());
  node.enableHighlight();

  nodeText.value = node.text.toString();
}

const editText = () => {
  nodeText.select();
}

nodeText.addEventListener('input', () => {
  selectedNode.changeText(nodeText.value);
});

export default { selectNode, editText };