import { SHAPES } from "../const";
export declare class Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    readonly type: SHAPES.RECT;
    constructor(x?: number, y?: number, width?: number, height?: number);
    get left(): number;
    get right(): number;
    get top(): number;
    get bottom(): number;
    static get EMPTY(): Rectangle;
    clone(): Rectangle;
    copyFrom(rectangle: Rectangle): Rectangle;
    copyTo(rectangle: Rectangle): Rectangle;
    contains(x: number, y: number): boolean;
}
