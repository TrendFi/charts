import { PositionalElement, ScaleLinear, ScaleTime } from "@util/types";
export type Bar = {
    x: Date;
    y: number;
    width: number;
    height: number;
    fill: string;
    stroke: string;
    lineWidth: number;
};
export declare class BarElement implements PositionalElement {
    readonly x: Date;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    readonly fill: string;
    readonly stroke: string;
    readonly lineWidth: number;
    constructor(cfg: any);
    draw(ctx: CanvasRenderingContext2D, xScale: ScaleTime, yScale: ScaleLinear, pixelRatio?: number): void;
}
