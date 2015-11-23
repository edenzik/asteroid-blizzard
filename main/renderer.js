var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
renderer.setClearColor( new THREE.Color(0xEEEEEE, 1.0));

function render() {
    // Update fps stats
    stats.update();
    // Update avatar, spacesphere, lights, and stars
    updateAvatar();
    updateSpacesphere();
    updateLights();
    renderStars();

    // add asteroid every n seconds
    var time = clock.getElapsedTime();
    var difficulty = 1;
    if (time % 1 < 1 / 59 ) {
        addAsteroid(Math.random() * 6 + 2,
        Math.random()*(5+difficulty) + 4*difficulty + 3);
        cleanup();
    }
    if (time % 5 < 1 / 59) {
        difficulty++;
    }

    scene.simulate(undefined, 1);
    renderer.render(scene, camera);
    requestAnimationFrame(render)
}

// Cleans up objects that are out of range to free up resources
function cleanup() {
    for (var i = scene.children.length - 1; i >= 0; --i) {
        // Cleanup asteroids
        var child = scene.children[i];
        if (child.name == "asteroid" || child.name == "stars") {
            var distance = new THREE.Vector3().copy(child.position).sub(avatar.position).length();
            if (distance > CLEANUP_DISTANCE) {
                console.log('Cleaning!');
                scene.remove(i);
            }
        }
    }
}
