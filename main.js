// add the output of the renderer to the html element
render();
window.onload = function() {
	document.body.appendChild( renderer.domElement );
}
