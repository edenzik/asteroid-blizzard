var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
renderer.setClearColor( new THREE.Color(0xEEEEEE, 1.0));
starsOffset = 0;

// Physijs setup
Physijs.scripts.worker = './lib/physijs_worker.js';
Physijs.scripts.ammo = './lib/ammo.js';

function render() {
    // Updates avatar position/rotation based on key-presses
    updateAvatar();

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

    scene.simulate();
    renderer.render(scene, camera);
    requestAnimationFrame(render)
}
