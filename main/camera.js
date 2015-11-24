var camera = new THREE.TargetCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);

camera.addTarget( {
    name: 'avatar',
    targetObject: avatar,
    cameraPosition: new THREE.Vector3(0, 0, -15),
    fixed: false,
    stiffness: .1,
    matchRotation: false
});

camera.setTarget('avatar');

function updateCamera() {
    camera.update();
    camera.lookAt(avatar.position);
}
