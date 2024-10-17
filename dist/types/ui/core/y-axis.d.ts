import { ScaleLinear, ScaleTime } from "@util/types";
import { Colors } from "../../feature/candlestick-chart/helpers";
/**
 * The y-axis component renders human readable reference marks.
 */
export declare class YAxis {
    colors: Colors;
    private axis;
    private ctx;
    private latestPricePosition;
    private _pixelRatio;
    private position;
    private tooltip;
    private latestPriceTooltip;
    private _xScale;
    private _yScale;
    constructor(x: ScaleTime, y: ScaleLinear, decimalPlaces: number | undefined, colors: Colors);
    context(context: CanvasRenderingContext2D): this;
    crosshair(pos: number | null): this;
    draw(): void;
    latestPrice(price: number | null): this;
    pixelRatio(ratio: number): this;
    xScale(x: ScaleTime): this;
    yScale(y: ScaleLinear): this;
}
