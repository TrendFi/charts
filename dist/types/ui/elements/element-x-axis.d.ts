import { Interval, RenderableElement, ScaleLinear, ScaleTime } from "@util/types";
export declare class XAxisElement implements RenderableElement {
    draw(ctx: CanvasRenderingContext2D, xScale: ScaleTime, _yScale: ScaleLinear, pixelRatio: number | undefined, interval: Interval, color: string): void;
}
