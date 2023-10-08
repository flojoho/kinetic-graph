const nodeButton = document.getElementById('node-button');
const edgeButton = document.getElementById('edge-button');
class Toolbar {
}
Toolbar.mode = 'edge';
export default Toolbar;
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
