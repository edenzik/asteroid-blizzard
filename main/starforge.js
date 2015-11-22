		/* 	Yep, it's a Star Wars: Knights of the Old Republic reference,
			are you really surprised at this point?
													*/
		var starQty = 1000;
			geometry = new THREE.SphereGeometry(20,20, 20);


	    	materialOptions = {
	    		size: .1, //I know this is the default, it's for you.  Play with it if you want.
	    		transparency: true,
	    		opacity: 0.7
	    	};

	    	starStuff = new THREE.PointCloudMaterial(materialOptions);

		// The wizard gaze became stern, his jaw set, he creates the cosmos with a wave of his arms

		for (var i = 0; i < starQty; i++) {		

			var starVertex = new THREE.Vector3();
			starVertex.x = Math.random() * 20 + -10;
			starVertex.y = Math.random() * 20 + -10;
			starVertex.z = Math.random() * 20 + -10;

			geometry.vertices.push(starVertex);

		}


		stars = new THREE.PointCloud(geometry, starStuff);
		scene.add(stars);
