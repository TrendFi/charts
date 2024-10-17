import { Interval, ScaleTime } from "@util/types";
import { Colors } from "../../feature/candlestick-chart/helpers";
/**
 * The x-axis component renders human readable reference marks.
 */
export declare class XAxis {
    colors: Colors;
    private axis;
    private ctx;
    private _interval;
    private _pixelRatio;
    private position;
    private tooltip;
    private _xScale;
    constructor(x: ScaleTime, interval: Interval, colors: Colors);
    context(context: CanvasRenderingContext2D): this;
    crosshair(pos: Date | null): this;
    draw(): void;
    interval(interval: Interval): this;
    pixelRatio(ratio: number): this;
    xScale(x: ScaleTime): this;
}
