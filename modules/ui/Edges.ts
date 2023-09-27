import Nodes from './Nodes.js';
import Edge from './Edge.js';

const main = document.getElementsByTagName('main')[0];
const edgeContainer = document.getElementById('edge-container');

edgeContainer.setAttribute("viewBox", `0 0 ${ main.offsetWidth } ${ main.offsetHeight }`);

const nodes = Nodes.get();
const edges = [
  new Edge(nodes[0], nodes[1])
];
edges.forEach(edge => edge.render());

const get = () => {
  return edges;
}

export default { get };