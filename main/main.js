function init() {
    // Initialize stats
    stats = initStats();
    // Set up game clock
    clock = new THREE.Clock(false);
    clock.start();
    // Render initial stars
    renderStars();
    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(renderer.domElement);
    // Create and bind listeners
    createEventListeners();
    // Start music
    initMusic();

    render();
}

function initMusic() {
    var audio = new Audio('audio/epic.mp3');
    audio.loop = true;
    audio.play();
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

window.onload = init;
