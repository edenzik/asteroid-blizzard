var points = [
        new THREE.Vector3(0, 0, 5),
        new THREE.Vector3(2, 0, 0),
        new THREE.Vector3(0, 0, -1),
        new THREE.Vector3(-2, 0, 0),
        new THREE.Vector3(0, -.5, 1),
        new THREE.Vector3(0, -.5, 2),
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(0, 1, 2)
    ];
var avatarGeometry = new THREE.ConvexGeometry(points);
// Move the ship's center back so that it rotates as expected
avatarGeometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, 0, -1.8) );

var material = new THREE.MeshPhongMaterial({color: 0xffff40});
material.emissive = new THREE.Color(0x001005);
material.specular = new THREE.Color(0xeeee00);
material.shininess = 100;
material.metal = true;
material.shading = THREE.FlatShading;

var avatar = new Physijs.ConvexMesh(avatarGeometry, material);
avatar.traverse(function (e) {
    e.castShadow = true
});

// Add a wireframe mesh on top of the phong mesh
var wireframeMaterial = new THREE.MeshBasicMaterial( { color: 0x0000dd, wireframe: true, transparent: true } );
avatar.add(new Physijs.ConvexMesh(avatarGeometry, wireframeMaterial));

avatar.name="spaceship";

avatar.turnLeft = function() {
    playerRotAction.y -= .0001;
    avatar.__dirtyRotation = true;
    avatar.rotateZ(-leftRightTilt);
}

avatar.turnRight = function() {
    playerRotAction.y += .0001;
    avatar.__dirtyRotation = true;
    avatar.rotateZ(leftRightTilt);
}

avatar.tiltDown = function() {
    playerRotAction.x += .0001;
    camera.rotation.x -= .0001;
    avatar.__dirtyRotation = true;
    avatar.rotateX(-upDownTilt);
}

avatar.tiltUp = function() {
    playerRotAction.x -= .0001;
    avatar.__dirtyRotation = true;
    avatar.rotateX(upDownTilt);
}

avatar.thrust = function() {
    avatar.thrusting = true;
}

avatar.stopThrust = function() {
    avatar.thrusting = false;
}

avatar.brake = function() {
    avatar.braking = true;
}

avatar.stopBrake = function() {
    avatar.braking = false;
}

// Update avatar according to current controls
function updateAvatar() {
    var rotation = new THREE.Matrix4().extractRotation(avatar.matrix);
    if (avatar.thrusting) {
        console.log('updating avatar');
        console.log(avatar);
        var force = new THREE.Vector3(0, 0, enginePower).applyMatrix4(rotation);
        avatar.applyCentralImpulse(force);
        console.log(spacesphere);
    }
}

// Make camera follow avatar
avatar.add(camera);
scene.add(avatar);
