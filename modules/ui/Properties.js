import Stage from './Stage.js';

const nodeText = document.getElementById('node-text');

let selectedNode;

const selectNode = (node) => {
  selectedNode = node;

  Stage.getNodes().forEach(node => node.disableHightlight());
  node.enableHighlight();

  nodeText.value = node.text;
}

const editText = () => {
  nodeText.select();
}

nodeText.addEventListener('input', () => {
  selectedNode.changeText(nodeText.value);
});

export default { selectNode, editText };