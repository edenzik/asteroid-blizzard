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
            avatar.tiltDown();
            break;
        case 65: // A key
            console.log("A");
            avatar.turnLeft();
            break;
        case 83: // S key
            console.log("S");
            avatar.tiltUp();
            break;
        case 68: // D key
            console.log("D");
            avatar.turnRight();
            break;
        case 32: // space bar
            console.log("space");
            avatar.thrust();
            break;
        case 77: // m key
            console.log('new asteroid!');
            addAsteroid(5, 1);
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
