render();
// Set up game clock
clock = new THREE.Clock(false);
clock.start();

window.onload = function() {
	document.body.appendChild( renderer.domElement );
}
