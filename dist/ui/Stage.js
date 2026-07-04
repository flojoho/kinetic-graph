import Vector from '../Vector.js';
const nodeContainer = document.getElementById('node-container');
export const mouseToStageCoordinates = (clientX, clientY) => {
    const rect = nodeContainer.getBoundingClientRect();
    return new Vector(clientX - rect.left, clientY - rect.top);
};
export let width = nodeContainer.offsetWidth;
export let height = nodeContainer.offsetHeight;
export default {
    mouseToStageCoordinates,
    width,
    height
};
