var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
renderer.setClearColor( new THREE.Color(0xEEEEEE, 1.0));

function render() {
    // render using requestAnimationFrame
    requestAnimationFrame(render);
    for (var i = 3; i < scene.children.length; ++i) {
        scene.children[i].rotation.y += .05;
    }
    renderer.render(scene, camera);
}
