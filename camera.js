var camera = new THREE.PerspectiveCamera(
		35,         // Field of view
		800 / 640,  // Aspect ratio
		.1,         // Near
		10000       // Far
		);
camera.position.set( -15, 10, 15 );
camera.lookAt( scene.position );
