// add subtle ambient lighting
var ambientLight = new THREE.AmbientLight(0xffffff / 8);
scene.add(ambientLight);

// Directional light to simulate sunlight
var directional = new THREE.DirectionalLight(0xffffff, 1.0);
directional.position.set(1, 0, 0);
scene.add(directional);

// Adjust lights so they follow the spaceship
function updateLights() {
    var direction = new THREE.Vector3().clone(sunMesh.position);
    direction.sub(avatar.position);
    directional.position.set(direction.x, direction.y, direction.z);
}
