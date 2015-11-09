var scene = new THREE.Scene();
var geometry = new THREE.BoxGeometry( 5, 5, 5 );
var material = new THREE.MeshLambertMaterial( { color: 0xFF0000 } );
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

var light = new THREE.PointLight( 0xFFFF00 );
light.position.set( 10, 0, 10 );
scene.add( light );
