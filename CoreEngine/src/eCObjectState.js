import { eCState } from "../src/eCState.js";


/**
 * Object runtime/object class
 */
export class eCObjectState extends eCState
{
    constructor() 
    {
       // Base class
       super();

       // Object's array
       this.objects = [];
    }

	init() {};
	input() {};
	update() {};
	render() {};
}