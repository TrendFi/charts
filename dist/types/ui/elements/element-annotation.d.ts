import { RenderableElement, ScaleLinear, ScaleTime } from "@util/types";
import { Colors } from "../../feature/candlestick-chart/helpers";
export declare class AnnotationElement implements RenderableElement {
    readonly decimalPlaces: number;
    readonly position: number | null;
    constructor(decimalPlaces: number, position: number | null);
    draw(ctx: CanvasRenderingContext2D, xScale: ScaleTime, yScale: ScaleLinear, pixelRatio: number | undefined, position: number | null, colors: Colors): void;
}
