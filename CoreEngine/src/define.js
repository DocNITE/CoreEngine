import _engine from "../config.json" assert {type: "json"};
import { eCRndDevice } from "../src/eCRndDevice.js"

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
/** @type {eCRndDevice} */
export let RndDevice;

// Small functions

/**
* Change main screen object
* @param {HTMLCanvasElement} canvas 
*/
export function setCanvas(canvas){
    _canvas = canvas;
}

/**
* Change main context
* @param {CanvasRenderingContext2D} context 
*/
export function setContext(context){
   _context = context;
}

/**
* Change main render device
* @param {eCRndDevice} device 
*/
export function setDevice(div){
  RndDevice = div;
}