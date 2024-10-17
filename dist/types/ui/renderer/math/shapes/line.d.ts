import { CurveFactory, CurveFactoryLineOnly } from "d3-shape";
import { SHAPES } from "../const";
export declare class Line {
    data: [number, number][];
    curve: CurveFactory | CurveFactoryLineOnly;
    readonly type: SHAPES.LINE;
    constructor(data?: [number, number][], curve?: CurveFactory | CurveFactoryLineOnly);
    clone(): Line;
    copyFrom(line: Line): Line;
    copyTo(line: Line): Line;
    contains(x: number, y: number): boolean;
}
