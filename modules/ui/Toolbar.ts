
type Mode = 'node' | 'edge';

const nodeButton = document.getElementById('node-button') as HTMLElement;
const edgeButton = document.getElementById('edge-button') as HTMLElement;

export default class Toolbar {
  static mode: Mode = 'edge';
}

nodeButton.addEventListener('click', e => {
  Toolbar.mode = 'node';

  nodeButton.classList.add('button-active');
  edgeButton.classList.remove('button-active');
});
edgeButton.addEventListener('click', e => {
  Toolbar.mode = 'edge';

  nodeButton.classList.remove('button-active');
  edgeButton.classList.add('button-active');
});