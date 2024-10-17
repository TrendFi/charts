import { Container } from "@ui/renderer";
import { CurveFactory } from "d3-shape";
/**
 * Draws an area curve
 */
export declare class PriceCurve extends Container {
    private area;
    private line;
    private stroke;
    private fill;
    private backgroundSurface;
    private curve;
    constructor(stroke?: number, fill?: number, backgroundSurface?: number, curve?: CurveFactory);
    update(points: [number, number][], height: number, resolution: number | undefined, fill: number | undefined, stroke: number | undefined, backgroundSurface: number | undefined, invert: boolean, startPrice: number): void;
}
