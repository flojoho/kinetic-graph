
const edgeContainer = document.getElementById('edge-container');

export default class Edge {
  #line;

  constructor(node1, node2) {
    this.node1 = node1;
    this.node2 = node2;
  }

  render() {
    const line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
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