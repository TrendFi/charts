import { HorizontalGrid, VerticalGrid } from "@ui/display-objects";
import { Container, Renderer } from "@ui/renderer";
import { ScaleLinear, ScaleTime } from "@util/types";
import { SeriesData } from "./chart";
import { AreaCurve } from "./display-objects/area-curve";
import { Colors } from "./helpers";
type ContentsColors = Pick<Colors, "accent1" | "accent2" | "accent3" | "accent4" | "accent5" | "accent6" | "backgroundSurface" | "emphasis100" | "positiveFill" | "positiveStroke" | "negativeFill" | "negativeStroke">;
/**
 * Responsible for drawing area curves for depth chart.
 */
export declare class Contents {
    stage: Container;
    renderer: Renderer;
    horizontalGrid: HorizontalGrid;
    verticalgrid: VerticalGrid;
    series: AreaCurve[];
    colors: ContentsColors;
    constructor(options: {
        view: HTMLCanvasElement;
        resolution: number;
        width: number;
        height: number;
        colors: ContentsColors;
    });
    render(): void;
    update(priceScale: ScaleLinear, timeScale: ScaleTime, data: SeriesData, height: number): void;
}
export {};
