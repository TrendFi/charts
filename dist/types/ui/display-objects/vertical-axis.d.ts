import { Container, Renderer } from "@ui/renderer";
import { ScaleLinear } from "@util/types";
import { Colors } from "../../feature/depth-chart/helpers";
import { Zoom } from "../../util/zoom";
export declare function pointer(event: any, resolution?: number): [number, number];
type VerticalAxisColors = Pick<Colors, "backgroundSurface" | "textPrimary" | "textSecondary">;
/**
 * Draws a vertical axis at the right of the chart
 */
export declare class VerticalAxis extends Container {
    renderer: Renderer;
    zoom: Zoom;
    private gesture;
    private firstPoint;
    private overlay;
    /**
     * Cache ticks
     */
    private nodeByKeyValue;
    constructor(renderer: Renderer);
    update(scale: ScaleLinear, width: number, height: number, resolution: number | undefined, colors: VerticalAxisColors, tickFormatSpecifier?: string): void;
    private onWheel;
    private onPointerDown;
    private onPointerMove;
    private onPointerOut;
}
export {};
