var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
renderer.setClearColor( new THREE.Color(0xEEEEEE, 1.0));
starsOffset = 0;

// Set up game clock
clock = new THREE.Clock(false);
clock.start();

// Render initial stars
renderStars();

function render() {
    // Updates avatar position/rotation based on key-presses
    updateAvatar();
    updateSpacesphere();
    updateLights();
    renderStars();

    // add asteroid every 5 seconds
    var time = clock.getElapsedTime();
    var difficulty = 1;
    if (time % 2 < 1 / 59 ) {
        addAsteroid(Math.random() * 6 + 2,
        Math.random()*(5+difficulty) + 4*difficulty + 3);
        //cleanupAsteroids();
    }

    scene.simulate(undefined, 1);
    renderer.render(scene, camera);
    requestAnimationFrame(render)
}
