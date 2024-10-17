import { Interval, RenderableElement, ScaleLinear, ScaleTime } from "@util/types";
import { Colors } from "../../feature/candlestick-chart/helpers";
export declare class XAxisTooltipElement implements RenderableElement {
    draw(ctx: CanvasRenderingContext2D, xScale: ScaleTime, _yScale: ScaleLinear, pixelRatio: number | undefined, position: Date | null, interval: Interval, colors: Colors): void;
}
