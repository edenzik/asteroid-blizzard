i = 0;
sign = 1;
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: // left arrow
            console.log("left");
            camera.rotation.y -= .1;
            break;
        case 38: // up arrow
            console.log("up");
            camera.rotation.x -= .1;
            break;
        case 39: // right arrow
            console.log("right");
            camera.rotation.y += .1;
            break;
        case 40: // down arrow
            console.log("down");
            camera.rotation.x += .1;
            break;
        case 87: // w key
            console.log("W");
            playerRotAction.x += .0001;
            camera.rotation.x -= .0001;
            avatar.rotation.x-=.01;
            break;
        case 65: // A key
            console.log("A");
            playerRotAction.y -= .0001;
            avatar.rotation.z -=.01;
            break;
        case 83: // S key
            console.log("S");
            playerRotAction.x -= .0001;
            avatar.rotation.x +=.01;
            break;
        case 68: // D key
            console.log("D");
            playerRotAction.y += .0001;
            avatar.rotation.z+=.01;
            break;
        case 32: // space bar
            console.log("space");
            i+=1;
            console.log(i);
            if (i>200){
                spacesphere.scale.multiplyScalar(.5)
                i = 0;
            }
            spacesphere.scale.multiplyScalar(1.01);
            avatar.thrust();
            break;
    }
};

document.onkeyup = function(e) {
    switch (e.keyCode) {
        case 37: // left arrow
            break;
        case 38: // up arrow
            break;
        case 39: // right arrow
            break;
        case 40: // down arrow
            break;
        case 87: // w key
            break;
        case 65: // A key
            break;
        case 83: // S key
            break;
        case 68: // D key
            break;
        case 32: // space bar
            avatar.stopThrust();
            break;
    }
};
