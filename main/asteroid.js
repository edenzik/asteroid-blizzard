// Creates an asteroid with specified size (radius) and speed
// Shape is chosen randomly from several geometries.
function addAsteroid(size, speed) {
    var materials = [
        new THREE.MeshLambertMaterial({color: Math.random() * 0xeeeeee, shading: THREE.FlatShading}),
        new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true})
    ];

    // Get random geometry and create mesh
    var mesh;
    var type = Math.floor(Math.random()*5);
    switch (type) {
    case 0:
        mesh = new Physijs.ConvexMesh( new THREE.IcosahedronGeometry(size), materials[0]);
    break;
    case 1:
        mesh = new Physijs.ConvexMesh(new THREE.TetrahedronGeometry(size, 1), materials[0]);
    break;
    case 2:
        mesh = new Physijs.ConvexMesh(new THREE.DodecahedronGeometry(size, 0), materials[0]);
    break;
    case 3:
        mesh = new Physijs.ConvexMesh(new THREE.SphereGeometry(size, 7, 5), materials[0]);
    break;
    default:
        mesh = new Physijs.ConvexMesh(new THREE.SphereGeometry(size, 6, 4), materials[0]);
    break;
    }

    mesh.traverse(function (e) {
        e.castShadow = true
    });

    // Get starting position in front of ship
    var rotation = new THREE.Matrix4().extractRotation(avatar.matrix);
    var direction = new THREE.Vector3( 1, 1, 1 ).applyMatrix4(rotation);
    var start = new THREE.Vector3(avatar.position.x, 10 * (avatar.position.y - direction.y), 10 * (avatar.position.z + direction.z));
    console.log(start);
    // Heading toward this position
    var target = avatar.position;

    // Set the direction, speed
    target.sub(start);
    target.normalize();
    target.multiplyScalar(speed);

    mesh.position.copy(start);

    mesh.name = "Asteroid";
    scene.add(mesh);

    mesh.setAngularVelocity(new THREE.Vector3(Math.random()*5, Math.random()*5, Math.random()*5));
    mesh.setLinearVelocity(target);
}
