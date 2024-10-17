import { Container } from "@ui/renderer";
import { CurveFactory } from "d3-shape";
/**
 * Draws two area curves
 */
export declare class DepthCurve extends Container {
    private area;
    private line;
    private fill;
    private stroke;
    private width;
    private curve;
    constructor(fill?: number, stroke?: number, width?: number, curve?: CurveFactory);
    update(points: [number, number][], height: number, resolution?: number, fill?: number, stroke?: number, width?: number): void;
}
