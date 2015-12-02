// Space gravity
var scene = new Physijs.Scene();
scene.setGravity(new THREE.Vector3(0, 0, 0));
scene.add(avatar);
scene.add(cubeCamera.object3d);
