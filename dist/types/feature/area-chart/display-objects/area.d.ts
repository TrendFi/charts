import { PriceCurve } from "@ui/display-objects";
import { Container, Graphics } from "@ui/renderer";
import { ScaleLinear, ScaleTime } from "@util/types";
import { Colors } from "../helpers";
type ContentsColors = Pick<Colors, "backgroundSurface" | "positiveFill" | "positiveStroke" | "negativeFill" | "negativeStroke">;
/**
 * Responsible for drawing area curves for depth chart.
 */
export declare class Area extends Container {
    priceCurvePositive: PriceCurve;
    maskPositive: Graphics;
    priceCurveNegative: PriceCurve;
    maskNegative: Graphics;
    colors: ContentsColors;
    constructor(colors: ContentsColors);
    update(priceScale: ScaleLinear, timeScale: ScaleTime, data: [number, number][], startPrice: number, height: number, resolution?: number): void;
}
export {};
