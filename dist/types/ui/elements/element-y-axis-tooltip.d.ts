import { RenderableElement, ScaleLinear, ScaleTime } from "@util/types";
import { Colors } from "../../feature/candlestick-chart/helpers";
export declare class YAxisTooltipElement implements RenderableElement {
    readonly decimalPlaces: number;
    constructor(decimalPlaces: number);
    draw(ctx: CanvasRenderingContext2D, xScale: ScaleTime, yScale: ScaleLinear, pixelRatio: number | undefined, position: number | null, colors: Colors): void;
}
