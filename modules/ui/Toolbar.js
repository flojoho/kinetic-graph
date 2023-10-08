const nodeButton = document.getElementById('node-button');
const edgeButton = document.getElementById('edge-button');
class Toolbar {
}
Toolbar.mode = 'edge';
export default Toolbar;
nodeButton.addEventListener('click', e => {
    Toolbar.mode = 'node';
});
edgeButton.addEventListener('click', e => {
    Toolbar.mode = 'edge';
});
