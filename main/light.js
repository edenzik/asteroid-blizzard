// add subtle ambient lighting
var ambientLight = new THREE.AmbientLight(0xffffff / 2);
scene.add(ambientLight);

//create two spotlights to illuminate the scene
/**

**/

// Adjust lights so they follow the spaceship
function renderLights() {
    console.log('rendering lights');
    var x = avatar.position.x;
    var y = avatar.position.y;
    var z = avatar.position.z;

    var spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set(x - 40, y + 60, z - 10);
    spotLight.intensity = .5;
    spotLight.matrixAutoUpdate = true;
    spotLight.name = "light";
    scene.add( spotLight );

    var spotLight2 = new THREE.SpotLight( 0x5192e9 );
    spotLight2.position.set(x + 40, y - 60, z + 30);
    spotLight2.intensity = .5;
    spotLight2.matrixAutoUpdate = true;
    spotLight2.name = "light";
    scene.add( spotLight2 );
}
