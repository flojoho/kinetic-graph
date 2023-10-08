
type Mode = 'node' | 'edge';

const nodeButton = document.getElementById('node-button') as HTMLElement;
const edgeButton = document.getElementById('edge-button') as HTMLElement;

export default class Toolbar {
  static mode: Mode = 'edge';
}

nodeButton.addEventListener('click', e => {
  Toolbar.mode = 'node';
});
edgeButton.addEventListener('click', e => {
  Toolbar.mode = 'edge';
});