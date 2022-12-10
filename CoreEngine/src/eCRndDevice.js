/**
 * My Own "canvas" & context logic
 */
export class eCRndDevice {
    // Private
    scrWidth;   // Screen width in ascii symbols
    scrHeight;  // Screen height in ascii symbols
    buffer;     // Screen buffer
    // Public
    canvas;     // Normal HTML canvas element
    ctx;        // Canvas 2d context

    /**
     * Init class
     * @param {*} canvas 
     * @param {*} context 
     */
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
    }

    /**
     * Update screen
     */
    draw() {

    }

    /**
     * Make colorful text
     * @param {Array} args 
     * @param {number} x 
     * @param {number} y 
     */
    fillRichText(args, x, y) {
        let ctx = this.ctx;
        let defaultFillStyle = ctx.fillStyle;
        let defaultFont = ctx.font;
    
        ctx.save();
        args.forEach(({ text, fillStyle, font }) => {
            ctx.fillStyle = fillStyle || defaultFillStyle;
            ctx.font = font || defaultFont;
            ctx.fillText(text, x, y);
            x += ctx.measureText(text).width;
        });
        ctx.restore();
    }
}