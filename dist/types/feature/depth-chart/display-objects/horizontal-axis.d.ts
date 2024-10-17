import { Container } from "@ui/renderer";
import { ScaleLinear } from "d3-scale";
import { Colors } from "../helpers";
type HorizontalAxisColors = Pick<Colors, "backgroundSurface" | "textPrimary" | "textSecondary">;
/**
 * Draws a horizontal axis at the bottom of the chart
 */
export declare class HorizontalAxis extends Container {
    /**
     * Cache ticks
     */
    private nodeByKeyValue;
    constructor();
    update(scale: ScaleLinear<number, number>, width: number, height: number, resolution: number | undefined, colors: HorizontalAxisColors): void;
}
export {};
