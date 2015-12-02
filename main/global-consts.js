// Physijs config
Physijs.scripts.worker = 'lib/physijs_worker.js';
Physijs.scripts.ammo = 'ammo.js';

// engine power for impulse thrusting
impulseEnginePower = 7;
// up/down tilt sensitivity
upDownTilt = .03;
// left/right tilt sensitivity
leftRightTilt = .03;
// Maximum speed of spaceship
SHIP_MAX_SPEED = 25;
// Radius from the last star rendering position the ship must travel before
// more stars are generated
STAR_RENDER_RADIUS = 3;
// Distance in front of the camera at which stars should be rendered
STAR_RENDER_DISTANCE = 20;
// Maximum number of stars to be rendered at each star rendering step
MAX_STARS = 100;
// Radius and number of fragments for space sphere
SPACE_SPHERE_SIZE = 200;
// Minimum distance from avatar at which an asteroid can be rendered
MIN_ASTEROID_DISTANCE = 50;
// Maximum distance from avatar at which an asteroid can be rendered
MAX_ASTEROID_DISTANCE = 20;
// Distance at which objects (i.e. asteroids and stars) should be cleaned up
// to free resources
CLEANUP_DISTANCE = 500;

// # of frames after which the ship's hull's reflections should update
REFLECTION_UPDATE_CYCLE = 8;
