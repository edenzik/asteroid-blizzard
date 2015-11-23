// Last position at which stars were generated
var lastPos = null;
function renderStars() {
    if (lastPos != null && distance(lastPos, avatar.position) < (STAR_RENDER_DISTANCE / 3)) {
        return;
    }
    lastPos = new THREE.Vector3().copy(avatar.position);
    // Number of stars is cubically related to the render distance
    // because as distance increases linearly, volume increases cubically
    var starQty = Math.random() * (.05 * Math.pow(STAR_RENDER_DISTANCE, 3));
    starGeo = new THREE.SphereGeometry(50);

    materialOptions = {
        size: .1, //I know this is the default, it's for you.  Play with it if you want.
        opacity: 0.7
    };

    starStuff = new THREE.PointsMaterial(materialOptions);

    for (var i = 0; i < starQty; i++) {
        var starVertex = new THREE.Vector3();
        starVertex.x = camera.position.x + Math.random() * STAR_RENDER_DISTANCE - (STAR_RENDER_DISTANCE / 2);
        starVertex.y = camera.position.y + Math.random() * STAR_RENDER_DISTANCE - (STAR_RENDER_DISTANCE / 2);
        starVertex.z = camera.position.z + Math.random() * STAR_RENDER_DISTANCE - (STAR_RENDER_DISTANCE / 2);

        starGeo.vertices.push(starVertex);
    }

    stars = new THREE.Points(starGeo, starStuff);
    stars.position.x = avatar.position.x;
    stars.position.y = avatar.position.y;
    stars.position.z = avatar.position.z;
    stars.name = "stars";
    
    scene.add(stars);
}

// Returns the distance between two points
function distance(v, w) {
    var dx = w.x - v.x;
    var dy = w.y - v.y;
    var dz = w.z - v.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
