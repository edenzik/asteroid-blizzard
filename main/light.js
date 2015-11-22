// add subtle ambient lighting
var ambientLight = new THREE.AmbientLight(0x090909);
scene.add(ambientLight);

// add spotlight for the shadows
var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-40, 40, 50);
spotLight.castShadow = true;
//scene.add(spotLight);

function updateLight() {
    //spotLight.position.set(avatar.position.x - 40, avatar.position.y + 40, avatar.position.z + 50);
}
