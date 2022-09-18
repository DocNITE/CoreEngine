import {
    DEBUG, 
    MAJOR, MINOR, PATCH, 
    _canvas, _context, 
    SetCanvas, SetContext, 
    CANVAS_LEFT_UP, CANVAS_CENTER
} from "../src/define.js"

/**
 * Change title name on current page
 * @param {string} text
 */
export function changePageTitle(text)
 {
     if (!text) return;
 
     document.querySelector("title").textContent = text;
 
     if (DEBUG)
         console.log("[DEBUG]: Title changed on '" + text + "'");
 }
 