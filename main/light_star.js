var earthMesh    = THREEx.Planets.createEarth();
scene.add(earthMesh);
earthMesh.scale.multiplyScalar(3);
var sunMesh    = THREEx.Planets.createSun();
scene.add(sunMesh);
sunMesh.scale.multiplyScalar(5);



var sphereGeom = new THREE.SphereGeometry(5, 32, 16);

var customMaterial = new THREE.ShaderMaterial( 
                {
                        uniforms: 
                        { 
                                "c":   { type: "f", value: 1 },
                                "p":   { type: "f", value: 0.0 },
                                glowColor: { type: "c", value: new THREE.Color(0xffff00) },
                                viewVector: { type: "v3", value: camera.position }
                        },
                        vertexShader:   document.getElementById( 'vertexShader'   ).textContent,
                        fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
                        side: THREE.FrontSide,
                        blending: THREE.AdditiveBlending,
                        transparent: true
                }   );

moonGlow = new THREE.Mesh( sphereGeom.clone(), customMaterial.clone() );
moonGlow.scale.multiplyScalar(.6);
scene.add(moonGlow);
