// add subtle ambient lighting
var ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

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
    /**
    spotLight.position.x = avatar.position.x - 40;
    spotLight.position.y = avatar.position.y + 60;
    spotLight.position.z = avatar.position.z - 10;

    spotLight2.position.x = avatar.position.x + 40;
    spotLight2.position.y = avatar.position.y - 60;
    spotLight2.position.z = avatar.position.z + 30;

    spotLight3.position.x = avatar.position.x - 40;
    spotLight3.position.y = avatar.position.y + 40;
    spotLight3.position.z = avatar.position.z + 50;
    **/
}
