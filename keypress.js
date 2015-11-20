i = 0;
sign = 1;
document.onkeydown = function(e) {
    
    switch (e.keyCode) {
        case 37:
            console.log("left");
            camera.rotation.y -= .1;
            break;
        case 38:
            console.log("up");
            camera.rotation.x -= .1;
            break;
        case 39:
            console.log("right");
            camera.rotation.y += .1;
            break;
        case 40:
            camera.rotation.x += .1;
            console.log("down");
            break;
        case 87:
           playerRotAction.x += .0001;
           camera.rotation.x -= .0001;
            avatar.rotation.x-=.01;
            console.log("W");
            break;
        case 65:
         playerRotAction.y -= .0001;
            avatar.rotation.z -=.01;
            console.log("A");
            break;
        case 83:
           playerRotAction.x -= .0001;
            avatar.rotation.x +=.01;
            console.log("S");
            break;
        case 68:
           playerRotAction.y += .0001;
            console.log("D");
            avatar.rotation.z+=.01;
            break;
        case 32:
                i+=1;
                console.log(i);
                if (i>200){
                        spacesphere.scale.multiplyScalar(.5)
                        i = 0;
                }
            spacesphere.scale.multiplyScalar(1.01);
            console.log("space");
            break;
    }
};
