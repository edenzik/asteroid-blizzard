var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
renderer.setClearColor( new THREE.Color(0xEEEEEE, 1.0));
starsOffset = 0;

shouldMakeStars = false;

function render() {
    shouldMakeStars+=1;
    // Updates avatar position/rotation based on key-presses
    updateAvatar();
    updateSpacesphere();
    updateLights();

       
    if (avatar.thrusting){
            shouldMakeStars = true;
    }
    if (shouldMakeStars){
        makeStars();
    }
    scene.simulate(undefined, 1);
    renderer.render(scene, camera);
    requestAnimationFrame(render)
}
