//Space background is a large sphere
var spacetex = THREE.ImageUtils.loadTexture("texture/space.jpg");
var spacesphereGeo = new THREE.SphereGeometry(20,20,20);
var spacesphereMat = new THREE.MeshPhongMaterial();
spacesphereMat.map = spacetex;

var spacesphere = new Physijs.Mesh(spacesphereGeo,spacesphereMat);

spacesphere.name = "spacesphere";

//spacesphere needs to be double sided as the camera is within the spacesphere
spacesphere.material.side = THREE.DoubleSide;

spacesphere.material.map.wrapS = THREE.RepeatWrapping;
spacesphere.material.map.wrapT = THREE.RepeatWrapping;
spacesphere.material.map.repeat.set( 5, 3);

var playerRotAction = {x:0,y:0,z:0};

scene.add(spacesphere);

// Adjust spacesphere so it follows spaceship
function updateSpacesphere() {
    spacesphere.position.x = avatar.position.x;
    spacesphere.position.y = avatar.position.y;
    spacesphere.position.z = avatar.position.z;
}
