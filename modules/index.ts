import './ui/Properties.js';
import './ui/Toolbar.js';
import './PhysicsLoop.js';
import NodeDragger from './NodeDragger.js';

document.addEventListener('mousemove', e => {
  NodeDragger.move(e.clientX, e.clientY, e.movementX, e.movementY);
});
document.addEventListener('mouseup', e => {
  NodeDragger.stop();
});