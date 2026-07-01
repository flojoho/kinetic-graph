const main = document.getElementsByTagName('main')[0];
const edgeContainer = document.getElementById('edge-container');
edgeContainer.setAttribute("viewBox", `0 0 ${main.offsetWidth} ${main.offsetHeight}`);
// const nodes = Nodes.get();
const edges = [];
const get = () => {
    return edges;
};
const add = (edge) => {
    edges.push(edge);
};
export default { get, add };
