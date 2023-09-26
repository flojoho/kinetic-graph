import Node from './Node.js';
import Properties from './Properties.js';

const nodeContainer = document.getElementById('node-container');

const nodeCount = 2;

let nodes = Array(nodeCount).fill().map(node => new Node());

nodeContainer.addEventListener('click', e => {
  const rect = nodeContainer.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const newNode = new Node(x, y);
  
  nodes.push(newNode);
  Properties.selectNode(newNode);
  Properties.editText();
});

const get = () => {
  return [...nodes];
}

export default { get };