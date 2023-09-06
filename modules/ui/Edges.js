import Nodes from './Nodes.js';

const main = document.getElementsByTagName('main')[0];
const edgeContainer = document.getElementById('edge-container');

edgeContainer.setAttribute("viewBox", `0 0 ${ main.offsetWidth } ${ main.offsetHeight }`);

class Edge {
  #line;

  constructor(node1, node2) {
    this.node1 = node1;
    this.node2 = node2;
  }

  render() {
    const line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    line.setAttribute('x1', 100);
    line.setAttribute('y1', 100);
    line.setAttribute('x2', 200);
    line.setAttribute('y2', 100);
    line.setAttribute('style', 'stroke: var(--white); stroke-width: var(--stroke-width)');
    
    edgeContainer.appendChild(line);
    this.#line = line;
  }

  refresh() {
    this.#line.setAttribute('x1', this.node1.pos.x);
    this.#line.setAttribute('y1', this.node1.pos.y);
    this.#line.setAttribute('x2', this.node2.pos.x);
    this.#line.setAttribute('y2', this.node2.pos.y);
  }
}

const nodes = Nodes.get();
const edges = [
  new Edge(nodes[0], nodes[1])
];
edges.forEach(edge => edge.render());

const get = () => {
  return edges;
}

export default { get };