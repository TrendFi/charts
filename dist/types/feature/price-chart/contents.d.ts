import { Area, HorizontalGrid, VerticalGrid } from "@ui/display-objects";
import { Container, Renderer } from "@ui/renderer";
import { ScaleLinear, ScaleTime } from "@util/types";
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
    priceCurve: Area;
    colors: ContentsColors;
    constructor(options: {
        view: HTMLCanvasElement;
        resolution: number;
        width: number;
        height: number;
        colors: ContentsColors;
    });
    render(): void;
    update(priceScale: ScaleLinear, timeScale: ScaleTime, data: ReadonlyArray<[number, number]>, startPrice: number, height: number): void;
}
export {};
