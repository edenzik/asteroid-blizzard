// once everything is loaded, we run our Three.js stuff.
    function init() {

        var SPACESHIP_SIZE = 4;

        var stats = initStats();

        // create a scene, that will hold all our elements such as objects, cameras and lights.
        var scene = new THREE.Scene();

        // create a camera, which defines where we're looking at.
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

        // create a render and set the size
        var renderer = new THREE.WebGLRenderer();

        renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;

        // create the ground plane
        var planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1);
        var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;

        // rotate and position the plane
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 0;
        plane.position.y = 0;
        plane.position.z = 0;

        // add the plane to the scene
        scene.add(plane);

        // position and point the camera to the center of the scene
        camera.position.x = -50;
        camera.position.y = 30;
        camera.position.z = 20;
        camera.lookAt(new THREE.Vector3(-10, 0, 0));

        // add subtle ambient lighting
        var ambientLight = new THREE.AmbientLight(0x090909);
        scene.add(ambientLight);

        // add spotlight for the shadows
        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(-40, 40, 50);
        spotLight.castShadow = true;
        scene.add(spotLight);

        // add geometries
        addGeometries(scene);

        var torus = new THREE.TorusGeometry(3, 1, 20, 20);
        var material =  new THREE.MeshLambertMaterial({color: 0xffff00, shading: THREE.SmoothShading});
        avatar = new THREE.Mesh(torus, material);

        avatar.traverse(function (e) {
            e.castShadow = true
        });
        avatar.name="avatar";
        avatar.position.y = 4;
        scene.add(avatar);

        // add the output of the renderer to the html element
        document.getElementById("WebGL-output").appendChild(renderer.domElement);

        // call the render function
        var step = 0;

        render();

        createEventListeners();

        function createEventListeners(){

            domElement = document.getElementById("WebGL-output");

            function mouseMoveListener(event){
                if (event.buttons) { 
                    scene.rotation.y += event.movementX / 100;
                    console.dir(event);
                    console.log(event.movementX);
                } 
            }

            domElement.addEventListener("mousemove",mouseMoveListener,false);

            function keyDownListener( event ) {
            console.dir(event);
            switch( event.keyCode ) {

                case 16: /* shift */  break;

                case 87: /*W*/
                    console.log('w down');
                    avatar.position.x++;
                    break;

                case 83: /*S*/
                    console.log('s down');
                    avatar.position.x--;
                    break;

                case 65: /*A*/
                    console.log('a down');
                    avatar.position.z--;
                    break;

                case 68: /*D*/
                    console.log('a down');
                    avatar.position.z++;
                    break;

                case 82: /*R*/  break;
                case 70: /*F*/  break;

                case 38: /*up*/  break;
                case 40: /*down*/  break;

                case 37: /*left*/  break;
                case 39: /*right*/  break;

                case 81: /*Q*/  break;
                case 69: /*E*/  break;
             }
         }
     
        domElement.addEventListener("keydown",keyDownListener,false);
        domElement.setAttribute("tabindex", 0);

    }


        function addGeometries(scene) {
            var geoms = [];

            // create a convex shape (a shape without dents)
            // using a couple of points
            // for instance a cube
            var points = [
                new THREE.Vector3(0, 0, 0).multiplyScalar(SPACESHIP_SIZE),
                new THREE.Vector3(0, 0, 1).multiplyScalar(SPACESHIP_SIZE),
                new THREE.Vector3(0, 1, 0).multiplyScalar(SPACESHIP_SIZE),
                new THREE.Vector3(0, 1, 1).multiplyScalar(SPACESHIP_SIZE),
                new THREE.Vector3(1, .5, .5).multiplyScalar(SPACESHIP_SIZE)
            ];
            geoms.push(new THREE.ConvexGeometry(points));

            // create a lathgeometry
            //http://en.wikipedia.org/wiki/Lathe_(graphics)
            var pts = [];//points array - the path profile points will be stored here
            var detail = .1;//half-circle detail - how many angle increments will be used to generate points
            var radius = 3;//radius for half_sphere
            for (var angle = 0.0; angle < Math.PI; angle += detail)//loop from 0.0 radians to PI (0 - 180 degrees)
                pts.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));//angle/radius to x,z

            var j = 0;
            for (var i = 0; i < geoms.length; i++) {
                var cubeMaterial = new THREE.MeshLambertMaterial({wireframe: true, color: Math.random() * 0xffffff});

                var materials = [

                    new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff, shading: THREE.FlatShading}),
                    new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true})

                ];

                var mesh = THREE.SceneUtils.createMultiMaterialObject(geoms[i], materials);
                mesh.traverse(function (e) {
                    e.castShadow = true
                });

                //var mesh = new THREE.Mesh(geoms[i],materials[i]);
                //mesh.castShadow=true;
                mesh.position.x = -24 + ((i % 4) * 12);
                mesh.position.y = 4;
                mesh.position.z = -8 + (j * 12);

                if ((i + 1) % 4 == 0) j++;
                scene.add(mesh);
            }

        }

        function render() {
            stats.update();

            // render using requestAnimationFrame
            requestAnimationFrame(render);
            for (var i = 3; i < scene.children.length; ++i) {
                scene.children[i].rotation.y += .05;
            }
            renderer.render(scene, camera);


        }

        function initStats() {

            var stats = new Stats();

            stats.setMode(0); // 0: fps, 1: ms

            // Align top-left
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';

            document.getElementById("Stats-output").appendChild(stats.domElement);

            return stats;
        }
    }
    window.onload = init