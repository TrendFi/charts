import { RenderableElement, ScaleLinear, ScaleTime } from "@util/types";
import { Colors } from "../../feature/candlestick-chart/helpers";
export declare class YAxisElement implements RenderableElement {
    draw(ctx: CanvasRenderingContext2D, xScale: ScaleTime, yScale: ScaleLinear, pixelRatio: number | undefined, colors: Colors): void;
}
