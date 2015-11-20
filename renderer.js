var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
renderer.setClearColor( new THREE.Color(0xEEEEEE, 1.0));

function render() {
    // render using requestAnimationFrame
    requestAnimationFrame(render);

    spacesphere.rotation.x += .0005;
    spacesphere.rotation.y += .0005;
    spacesphere.rotation.z += .0005;

    spacesphere.rotation.x += playerRotAction.x;
    spacesphere.rotation.y += playerRotAction.y;
    spacesphere.rotation.z += playerRotAction.z;
    renderer.render(scene, camera);
}
