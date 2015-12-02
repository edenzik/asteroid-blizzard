// add subtle ambient lighting
var ambientLight = new THREE.AmbientLight(0xffffff / 8);
scene.add(ambientLight);

var directional = new THREE.DirectionalLight(0xffffff, 1.0);
directional.position.set(1, 0, 0);
scene.add(directional);

//create two spotlights to illuminate the scene
/**
var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( -40, 60, -10 );
spotLight.intensity = 2;
console.log(spotLight);
spotLight.matrixAutoUpdate = true;
scene.add( spotLight );

var spotLight2 = new THREE.SpotLight( 0x5192e9 );
spotLight2.position.set( 40, -60, 30 );
spotLight2.intensity = 1.5;
spotLight2.matrixAutoUpdate = true;
scene.add( spotLight2 );

// add spotlight for the shadows
var spotLight3 = new THREE.SpotLight(0xffffff);
spotLight3.position.set(-40, 40, 50);
spotLight3.castShadow = true;
spotLight3.matrixAutoUpdate = true;
scene.add(spotLight3);
**/


// Adjust lights so they follow the spaceship
function updateLights() {
    var direction = new THREE.Vector3().clone(sunMesh.position);
    direction.sub(avatar.position);
    directional.position.set(direction.x, direction.y, direction.z);
}
