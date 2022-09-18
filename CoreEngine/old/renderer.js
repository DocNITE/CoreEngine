// Screen buffer. Not recomended
let SCREEN_BUFFER = null;
// Fps counter. Only read
let FPS_COUNTER = 0;
let FPS = 0;

function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}

/** @param {Number} x * @param {Number} y */
function getPixel(x, y) {
    if (!SCREEN_BUFFER) return [0,0,0,0];

    var p = 4 * (x + y * SCREEN_BUFFER.width);
    return SCREEN_BUFFER.slice(p, p + 4);
}

/** @param {Number} x * @param {Number} y * @param {Array} color */
function setPixel(x, y, color) {
    if (!SCREEN_BUFFER) return false;

    let p = 4 * (x + y * SCREEN_BUFFER.width);

    for (let i = 0; i <= 4; i += 1) 
    {
        SCREEN_BUFFER.data[p + i] = color[i];
    }
}

// Debug fps counter
function engineFPSDebugHandler()
{
    FPS = FPS_COUNTER;
    console.log(FPS);

    FPS_COUNTER = 0;
}

function engineRenderInit()
{
    setInterval(engineFPSDebugHandler, 1000);
}

function engineRender()
{
    let canvas = document.getElementById('canvas');
    
    // Change canvas size for browser window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    canvas.style.left = "0px";
    canvas.style.top = "0px";
    canvas.style.position = "absolute";

    const ctx = canvas.getContext('2d');

    // Clear screen
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Main buffer
    SCREEN_BUFFER = ctx.getImageData(0, 0, canvas.width, canvas.height);

    setPixel(50, 50, [getRandomInt(255), getRandomInt(255), getRandomInt(255), 255])
    setPixel(50, 60, [getRandomInt(255), getRandomInt(255), getRandomInt(255), 100])

    // Draw image data to the canvas
    ctx.putImageData(SCREEN_BUFFER, 0, 0);

    // FPS
    FPS_COUNTER += 1;

    // Repeat
    window.requestAnimationFrame(engineRender);
}
