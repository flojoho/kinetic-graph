import Nodes from './Nodes.js';
import Edge from './Edge.js';

const main = document.getElementsByTagName('main')[0];
const edgeContainer = document.getElementById('edge-container') as HTMLElement;

edgeContainer.setAttribute("viewBox", `0 0 ${ main.offsetWidth } ${ main.offsetHeight }`);

// const nodes = Nodes.get();
const edges: Edge[] = [];

const get = () => {
  return edges;
}

const add = (edge: Edge) => {
  edges.push(edge);
}

export default { get, add };