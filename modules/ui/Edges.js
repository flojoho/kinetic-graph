
const main = document.getElementsByTagName('main')[0];
const edgeContainer = document.getElementById('edge-container');

edgeContainer.setAttribute("viewBox", `0 0 ${ main.offsetWidth } ${ main.offsetHeight }`);