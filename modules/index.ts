import './ui/Properties.js';
import './ui/Toolbar.js';
import './PhysicsLoop.js';
import NodeDragger from './NodeDragger.js';
import EdgeDragger from './EdgeDragger.js';

document.addEventListener('mousemove', e => {
  NodeDragger.move(e.clientX, e.clientY, e.movementX, e.movementY);
  EdgeDragger.move(e.clientX, e.clientY);
});
document.addEventListener('mouseup', e => {
  NodeDragger.stop();
  EdgeDragger.stop();
});