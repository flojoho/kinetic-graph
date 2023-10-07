import Vector from '../Vector.js';
import Node from './Node.js';
import Properties from './Properties.js';
const nodeContainer = document.getElementById('node-container');
const nodeCount = 2;
let nodes = Array(nodeCount).fill(0).map(node => new Node());
nodeContainer.addEventListener('mousedown', e => {
    e.preventDefault();
    const { x, y } = toStageCoordinates(e.clientX, e.clientY);
    const newNode = new Node(x, y);
    nodes.push(newNode);
    Properties.selectNode(newNode);
    Properties.editText();
});
const get = () => {
    return [...nodes];
};
const toStageCoordinates = (clientX, clientY) => {
    const rect = nodeContainer.getBoundingClientRect();
    return new Vector(clientX - rect.left, clientY - rect.top);
};
export default { get, toStageCoordinates };
