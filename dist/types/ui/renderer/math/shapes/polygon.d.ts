import { SHAPES } from "../const";
import { PointData } from "../point";
export declare class Polygon {
    points: number[];
    closeStroke: boolean;
    readonly type: SHAPES.POLY;
    constructor(points: PointData[] | number[]);
    constructor(...points: PointData[] | number[]);
    clone(): Polygon;
    contains(x: number, y: number): boolean;
}
