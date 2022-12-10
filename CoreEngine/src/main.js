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

    for (let y = 0; (y*16+16) < innerHeight; y++) {
        for (let x = 0; (x*11+11) < innerWidth; x++) {
            scrW = x;
        }
        scrH = y;
    }

    RndDevice.scrHeight = scrH+2;
    RndDevice.scrWidth = scrW-4;
}
addEventListener("resize", resize);
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
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
    let sText = "";
    let sArr = [];

    for (let a = 1; a < RndDevice.scrHeight; a++) {
        for (let i = 0; i < RndDevice.scrWidth; i++) {
            sArr.push({text: "▓", fillStyle: `rgba(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, 255)`, font: "16px Kitchen Sink"});
        }
        RndDevice.fillRichText(sArr, 0, 16*a)
        sArr = [];
    }
    //console.log(RndDevice.scrWidth)
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
