import { Container } from "@ui/renderer";
import { ScaleLinear } from "d3-scale";
import { Colors } from "../helpers";
type VerticalAxisColors = Pick<Colors, "backgroundSurface" | "textPrimary" | "textSecondary">;
/**
 * Draws a vertical axis at the right of the chart
 */
export declare class VerticalAxis extends Container {
    /**
     * Cache ticks
     */
    private nodeByKeyValue;
    constructor();
    update(scale: ScaleLinear<number, number>, width: number, height: number, resolution: number | undefined, colors: VerticalAxisColors): void;
}
export {};
