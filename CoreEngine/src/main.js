import _engine from "../config.json" assert {type: "json"};
import {
    DEBUG, 
    MAJOR, MINOR, PATCH, 
    _canvas, _context, 
    SetCanvas, SetContext, 
    CANVAS_LEFT_UP, CANVAS_CENTER
} from "../src/define.js"

// Utils
import {changePageTitle} from "../src/utils.js"


/**
 * Main application loop.
 * This function repeat himself every time.
 */
function main()
{
    // Viewport aligment
    // TODO: But now only left_up, and, maybe, center
    if (_engine.SCREEN.ALIGMENT == CANVAS_LEFT_UP)
    {
        _canvas.style.left = "0px";
        _canvas.style.top = "0px";
        _canvas.style.position = "absolute";
    }

    // Resize viewport for resolution config
    if (_engine.SCREEN.FULLSCREEN)
    {
        _canvas.width = innerWidth;
        _canvas.height = innerHeight;
    }
    else
    {
        _canvas.width = _engine.SCREEN.WIDTH;
        _canvas.height = _engine.SCREEN.HEIGHT;
    }

    _context.clearRect(0, 0, _canvas.width, _canvas.height)

    _context.fillStyle = 'white';
    _context.font = '20px Serilif Sans';
    _context.fillText('Я мужик ---', 100, 200);
    
    // Repeat func
    requestAnimationFrame(main);
}


/**
 * Main game engine initialisation.
 * This event handler will initialise the game engine.
 */
function init()
{
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
    SetCanvas(document.getElementById('canvas'));
    SetContext(_canvas.getContext('2d'));

    //_canvas.style.cursor = "none";

    let newMusic = new Audio("DATA/MUSIC/OST_STORY.MP3")
    newMusic.play();

    requestAnimationFrame(main);

    if (DEBUG)
        console.log("[DEBUG]: Engine succscefuly start...")
}
addEventListener("load", init);
