import { SHAPES } from "../const";
import { Rectangle } from "./rectangle";
export declare class Circle {
    x: number;
    y: number;
    radius: number;
    readonly type: SHAPES.CIRCLE;
    constructor(x?: number, y?: number, radius?: number);
    clone(): Circle;
    contains(x: number, y: number): boolean;
    getBounds(): Rectangle;
}
