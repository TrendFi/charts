import { Container } from "@ui/renderer";
import { CurveFactory } from "d3-shape";
/**
 * Draws an area curve
 */
export declare class AreaCurve extends Container {
    private area;
    private line;
    private stroke;
    private fill;
    private backgroundSurface;
    private curve;
    constructor(stroke?: number, fill?: number, backgroundSurface?: number, curve?: CurveFactory);
    update(points: [number, number, number][], height: number, resolution?: number, fill?: number, stroke?: number, backgroundSurface?: number): void;
}
