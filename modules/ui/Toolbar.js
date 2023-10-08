const nodeButton = document.getElementById('node-button');
const edgeButton = document.getElementById('edge-button');
class Toolbar {
    static setMode(mode) {
        Toolbar.mode = mode;
        if (mode === 'node') {
            nodeButton.classList.add('button-active');
            edgeButton.classList.remove('button-active');
        }
        else if (mode === 'edge') {
            nodeButton.classList.remove('button-active');
            edgeButton.classList.add('button-active');
        }
    }
}
Toolbar.mode = 'edge';
export default Toolbar;
Toolbar.setMode('node');
nodeButton.addEventListener('click', e => {
    Toolbar.setMode('node');
});
edgeButton.addEventListener('click', e => {
    Toolbar.setMode('edge');
});
