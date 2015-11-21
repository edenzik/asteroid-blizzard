// Physijs setup
Physijs.scripts.worker = './lib/physijs_worker.js';
Physijs.scripts.ammo = './lib/ammo.js';

render();
window.onload = function() {
	document.body.appendChild( renderer.domElement );
}
