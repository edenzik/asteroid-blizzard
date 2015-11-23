function createEventListeners() {
    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 32: // space bar
                avatar.thrust();
                break;
            case 37: // left arrow
            case 65: // A key
                avatar.turnLeft();
                break;
            case 66: // B key
                avatar.brake();
                break;
            case 39: // right arrow
            case 68: // D key
                avatar.turnRight();
                break;
            case 40: // down arrow
            case 83: // S key
                avatar.tiltUp();
                break;
            case 38: // up arrow
            case 87: // w key
                avatar.tiltDown();
                break;
        }
    };

    document.onkeyup = function(e) {
        switch (e.keyCode) {

            case 32: // space bar
                avatar.stopThrust();
                break;

            case 37: // left arrow
            case 65: // A key
                avatar.stopTurnLeft();
                break;

            case 66: // B key
                avatar.stopBrake();
                break;

            case 39: // right arrow
            case 68: // D key
                avatar.stopTurnRight();
                break;

            case 40: // down arrow
            case 83: // S key
                avatar.stopTiltUp();
                break;

            case 38: // up arrow
            case 87: // w key
                avatar.stopTiltDown();
                break;
        }
    }
}
