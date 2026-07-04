import Vector from '../Vector.js';

const nodeContainer = document.getElementById('node-container') as HTMLElement;

export const mouseToStageCoordinates = (clientX: number, clientY: number) => {
  const rect = nodeContainer.getBoundingClientRect();

  return new Vector(
    clientX - rect.left,
    clientY - rect.top
  );
};

export let width = nodeContainer.offsetWidth;
export let height = nodeContainer.offsetHeight;

export default {
  mouseToStageCoordinates,
  width,
  height
};
