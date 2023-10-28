const edgeContainer = document.getElementById('edge-container');
export default class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        const line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute('style', 'stroke: var(--white); stroke-width: var(--edge-width)');
        edgeContainer.appendChild(line);
        this.svgLine = line;
        this.redraw();
    }
    redraw() {
        this.svgLine.setAttribute('x1', this.start.x.toString());
        this.svgLine.setAttribute('y1', this.start.y.toString());
        this.svgLine.setAttribute('x2', this.end.x.toString());
        this.svgLine.setAttribute('y2', this.end.y.toString());
    }
    update(pos1, pos2) {
        this.start = pos1;
        this.end = pos2;
        this.redraw();
    }
    remove() {
        this.svgLine.remove();
    }
}
