var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
renderer.setClearColor( new THREE.Color(0xEEEEEE, 1.0));
starsOffset = 0;

function render() {
    // Updates avatar position/rotation based on key-presses
    updateAvatar();
    updateSpacesphere();
    updateLights();
    makeStars();

    scene.simulate(undefined, 1);
    renderer.render(scene, camera);
    requestAnimationFrame(render)
}
