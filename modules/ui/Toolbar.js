const nodeButton = document.getElementById('node-button');
const edgeButton = document.getElementById('edge-button');
const arrowButton = document.getElementById('arrow-button');
class Toolbar {
    static setMode(mode) {
        Toolbar.mode = mode;
        const buttons = [nodeButton, edgeButton, arrowButton];
        buttons.forEach(button => button.classList.remove('button-active'));
        if (mode === 'node') {
            nodeButton.classList.add('button-active');
        }
        else if (mode === 'edge') {
            edgeButton.classList.add('button-active');
        }
        else if (mode === 'arrow') {
            arrowButton.classList.add('button-active');
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
arrowButton.addEventListener('click', e => {
    Toolbar.setMode('arrow');
});
