import { Container, Renderer } from "@ui/renderer";
import { ScaleLinear, ScaleTime } from "@util/types";
import { Colors } from "../../feature/depth-chart/helpers";
import { Zoom } from "../../util/zoom";
type HorizontalAxisColors = Pick<Colors, "backgroundSurface" | "textPrimary" | "textSecondary">;
/**
 * Draws a horizontal axis at the bottom of the chart
 */
export declare class HorizontalAxis extends Container {
    renderer: Renderer;
    zoom: Zoom;
    private gesture;
    private firstPoint;
    private overlay;
    private tickNodes;
    constructor(renderer: Renderer);
    update(scale: ScaleLinear | ScaleTime, width: number, height: number, resolution: number | undefined, colors: HorizontalAxisColors): void;
    private onWheel;
    private onPointerDown;
    private onPointerMove;
    private onPointerOut;
}
export {};
