/* 	Yep, it's a Star Wars: Knights of the Old Republic reference,
        are you really surprised at this point?
        */
function makeStars(){
        var starQty = 100;
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
        makeStars();
