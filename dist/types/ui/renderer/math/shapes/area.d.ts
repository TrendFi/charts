import { CurveFactory } from "d3-shape";
import { SHAPES } from "../const";
export declare class Area {
    data: [number, number, number][];
    curve: CurveFactory;
    y0: number;
    readonly type: SHAPES.AREA;
    constructor(data?: [number, number, number][], curve?: CurveFactory, y0?: number);
    clone(): Area;
    copyFrom(area: Area): Area;
    copyTo(area: Area): Area;
    contains(x: number, y: number): boolean;
}
