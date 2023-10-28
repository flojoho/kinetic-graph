
type Mode = 'node' | 'edge' | 'arrow';

const nodeButton = document.getElementById('node-button') as HTMLElement;
const edgeButton = document.getElementById('edge-button') as HTMLElement;
const arrowButton = document.getElementById('arrow-button') as HTMLElement;

export default class Toolbar {
  static mode: Mode = 'edge';

  static setMode(mode: Mode) {
    Toolbar.mode = mode;

    const buttons = [nodeButton, edgeButton, arrowButton];

    buttons.forEach(button => button.classList.remove('button-active'));

    if(mode === 'node') {
      nodeButton.classList.add('button-active');
    } else if(mode === 'edge') {
      edgeButton.classList.add('button-active');
    } else if(mode === 'arrow') {
      arrowButton.classList.add('button-active');
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
arrowButton.addEventListener('click', e => {
  Toolbar.setMode('arrow');
});