document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            console.log("left");
	    
            break;
        case 38:
            console.log("up");
            break;
        case 39:
            console.log("right");
            break;
        case 40:
            console.log("down");
            break;
    }
};
