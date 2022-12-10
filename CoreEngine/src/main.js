import _engine from "../config.json" assert {type: "json"};
import {
    DEBUG, 
    MAJOR, MINOR, PATCH, 
    _canvas, _context, RndDevice,
    setCanvas, setContext, 
    CANVAS_LEFT_UP, CANVAS_CENTER, setDevice
} from "../src/define.js"

// Utils
import {changePageTitle} from "../src/utils.js"
// Device
import { eCRndDevice } from "../src/eCRndDevice.js"


/**
 * Main application loop.
 * This function repeat himself every time.
 */
function main()
{
    mainUpdate();
    mainRender();
    
    // Repeat func
    requestAnimationFrame(main);
}

function resize() {
    // Viewport aligment
    // TODO: But now only left_up, and, maybe, center
    if (_engine.SCREEN.ALIGMENT == CANVAS_LEFT_UP) {
        _canvas.style.left = "0px";
        _canvas.style.top = "0px";
        _canvas.style.position = "absolute";
    }

    // Resize viewport for resolution config
    if (_engine.SCREEN.FULLSCREEN) {
        _canvas.width = innerWidth;
        _canvas.height = innerHeight;
    } else {
        _canvas.width = _engine.SCREEN.WIDTH;
        _canvas.height = _engine.SCREEN.HEIGHT;
    }

    let scrW = 0; //11
    let scrH = 0; //16

    for (let y = 0; (y*11+11) < innerHeight; y++) {
        for (let x = 0; (x*16+16) < innerWidth; x++) {
            scrW = x;
        }
        scrH = y;
    }
}
addEventListener("resize", resize);

/**
 * Main game render method.
 * Rendered all quered state's
 */
function mainRender() {
    _context.clearRect(0, 0, _canvas.width, _canvas.height)

    // TEST
    //_context.fillStyle = 'white';
    //_context.font = '20px Serilif Sans';
    //_context.fillText('#FFFFFFTest message', 100, 200);
    // Testing screen draw

    RndDevice.fillRichText(
        [
            {text: "ah", fillStyle: "green", font: "16px Kitchen Sink"}, 
            {text: "m:aDn", fillStyle: "red", font: "16px Kitchen Sink"},
            {text: "ṗy", fillStyle: "white", font: "16px Kitchen Sink"},
            {text: "ou", fillStyle: "cyan", font: "16px Kitchen Sink"},
            {text: " a", fillStyle: "white", font: "16px Kitchen Sink"}
        ], 
        0, 15
    )
}


/**
 * Main game logic update.
 */
 function mainUpdate() {

}


/**
 * Main game engine initialisation.
 * This event handler will initialise the game engine.
 */
function init() {
    if (DEBUG)
        console.log("[DEBUG]: Engine load...")

    // Change page title
    changePageTitle(
        _engine["ENGINE_NAME"] + " " +
        _engine["ENGINE_VER"][MAJOR] + "." +
        _engine["ENGINE_VER"][MINOR] + "." +
        _engine["ENGINE_VER"][PATCH]
        );

	// Initialise canvas & context
    setCanvas(document.getElementById('canvas'));
    setContext(_canvas.getContext('2d'));
    setDevice(new eCRndDevice(_canvas, _context));

    //_canvas.style.cursor = "none";

    resize();
    requestAnimationFrame(main);

    if (DEBUG)
        console.log("[DEBUG]: Engine succscefuly start...")
}
addEventListener("load", init);
