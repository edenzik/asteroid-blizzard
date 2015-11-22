// Last position at which stars were generated
var lastPos = null;
makeStars();
function makeStars() {
    if (lastPos) {
        console.log(lastPos);
        console.log(avatar.position);
        console.log(distance(lastPos, avatar.position));
    }
    if (lastPos != null && distance(lastPos, avatar.position) < STAR_RENDER_RADIUS) {
        console.log('hit')
        return;
    }
    lastPos = new THREE.Vector3().copy(avatar.position);
    console.log('generating stars!');
    var starQty = Math.random() * MAX_STARS;
    starGeo = new THREE.SphereGeometry(50);

    materialOptions = {
            size: .1, //I know this is the default, it's for you.  Play with it if you want.
            opacity: 0.7
    };

    starStuff = new THREE.PointsMaterial(materialOptions);

    // The wizard gaze became stern, his jaw set, he creates the cosmos with a wave of his arms

    for (var i = 0; i < starQty; i++) {
            var starVertex = new THREE.Vector3();
            starVertex.x = camera.position.x + Math.random() * 20 + -10;
            starVertex.y = camera.position.x + Math.random() * 20 + -10;
            starVertex.z = camera.position.x + Math.random() * 20 + -10;

            starGeo.vertices.push(starVertex);
    }


    stars = new THREE.Points(starGeo, starStuff);
    stars.position.x = avatar.position.x;
    stars.position.y = avatar.position.y;
    stars.position.z = avatar.position.z;
    scene.add(stars);
}

// Returns the distance between two points
function distance(v, w) {
    var dx = w.x - v.x;
    var dy = w.y - v.y;
    var dz = w.z - v.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
