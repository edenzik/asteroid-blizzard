var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
renderer.setClearColor( new THREE.Color(0xEEEEEE, 1.0));
starsOffset = 0;
function render() {
    // render using requestAnimationFrame
    requestAnimationFrame(render);

    spacesphere.rotation.x += .0005;
    spacesphere.rotation.y += .0005;
    spacesphere.rotation.z += .0005;

    if (starsOffset < -15 ){
            console.log(starsOffset);
        starsOffset = 0;
        geometry.translate(0,0,15);
    }
    geometry.translate(0,0,-0.01);
    starsOffset -=0.01 ;
    renderer.render(scene, camera);
}
