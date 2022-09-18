import _engine from "../config.json" assert {type: "json"};

// Debug pre-processor
export const DEBUG = _engine.DEBUG;

// Ver. macros
export const MAJOR = 0;
export const MINOR = 1;
export const PATCH = 2;

// Aligment canvas orientation
export const CANVAS_LEFT_UP = 0;
export const CANVAS_CENTER  = 1;

//Main screen buffer
/** @type {HTMLCanvasElement} */
export let _canvas;
/** @type {CanvasRenderingContext2D} */
export let _context;


// Small functions

/**
 * Change main screen object
 * @param {HTMLCanvasElement} canvas 
 */
export function SetCanvas(canvas)
{
    _canvas = canvas;
}

/**
 * Change main context
 * @param {CanvasRenderingContext2D} context 
 */
 export function SetContext(context)
 {
    _context = context;
 }