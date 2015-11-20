  //create two spotlights to illuminate the scene
  var spotLight = new THREE.SpotLight( 0xffffff ); 
  spotLight.position.set( -40, 60, -10 ); 
  spotLight.intensity = 2;
  scene.add( spotLight );

  var spotLight2 = new THREE.SpotLight( 0x5192e9 ); 
  spotLight2.position.set( 40, -60, 30 ); 
  spotLight2.intensity = 1.5;
  scene.add( spotLight2 );
