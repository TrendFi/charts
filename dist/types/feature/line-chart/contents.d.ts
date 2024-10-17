import { HorizontalGrid, LineCurve, VerticalGrid } from "@ui/display-objects";
import { Container, Renderer } from "@ui/renderer";
import { ScaleLinear, ScaleTime } from "@util/types";
import { Colors } from "./helpers";
type ContentsColors = Pick<Colors, "accent1" | "accent2" | "accent3" | "accent4" | "accent5" | "accent6" | "emphasis100" | "backgroundSurface" | "positiveFill" | "positiveStroke" | "negativeFill" | "negativeStroke">;
/**
 * Responsible for drawing area curves for depth chart.
 */
export declare class Contents {
    stage: Container;
    renderer: Renderer;
    horizontalGrid: HorizontalGrid;
    verticalgrid: VerticalGrid;
    series: LineCurve[];
    colors: ContentsColors;
    constructor(options: {
        view: HTMLCanvasElement;
        resolution: number;
        width: number;
        height: number;
        colors: ContentsColors;
    });
    render(): void;
    update(priceScale: ScaleLinear, xScale: ScaleLinear | ScaleTime, data: [number, ...number[]][], startPrice: number, height: number): void;
}
export {};
