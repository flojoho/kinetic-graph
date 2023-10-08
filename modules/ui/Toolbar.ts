
type Mode = 'node' | 'edge';

const nodeButton = document.getElementById('node-button') as HTMLElement;
const edgeButton = document.getElementById('edge-button') as HTMLElement;

export default class Toolbar {
  static mode: Mode = 'edge';

  static setMode(mode: Mode) {
    Toolbar.mode = mode;

    if(mode === 'node') {
      nodeButton.classList.add('button-active');
      edgeButton.classList.remove('button-active');
    } else if(mode === 'edge') {
      nodeButton.classList.remove('button-active');
      edgeButton.classList.add('button-active');
    }
  }
}

Toolbar.setMode('node');

nodeButton.addEventListener('click', e => {
  Toolbar.setMode('node');
});
edgeButton.addEventListener('click', e => {
  Toolbar.setMode('edge');
});