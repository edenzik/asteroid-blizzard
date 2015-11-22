// add subtle ambient lighting
var ambientLight = new THREE.AmbientLight(0x090909);
scene.add(ambientLight);

//create two spotlights to illuminate the scene
var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( -40, 60, -10 );
spotLight.intensity = 2;
scene.add( spotLight );

var spotLight2 = new THREE.SpotLight( 0x5192e9 );
spotLight2.position.set( 40, -60, 30 );
spotLight2.intensity = 1.5;
scene.add( spotLight2 );

// add spotlight for the shadows
var spotLight3 = new THREE.SpotLight(0xffffff);
spotLight.position.set(-40, 40, 50);
spotLight.castShadow = true;
scene.add(spotLight);


// Adjust lights so they follow the spaceship
function updateLights() {
    spotLight.position.x = camera.position.x;
    spotLight.position.y = camera.position.y;
    spotLight.position.z = camera.position.z;

    spotLight2.position.x = camera.position.x;
    spotLight2.position.y = camera.position.y;
    spotLight2.position.z = camera.position.z;

    spotLight3.position.x = camera.position.x;
    spotLight3.position.y = camera.position.y;
    spotLight3.position.z = camera.position.z;

}
