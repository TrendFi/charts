import { PositionalElement, ScaleLinear, ScaleTime } from "@util/types";
export declare class TickElement implements PositionalElement {
    readonly x: Date;
    readonly y: number;
    readonly width: number;
    readonly color: string;
    readonly orient: "left" | "right";
    constructor(cfg: any);
    draw(ctx: CanvasRenderingContext2D, xScale: ScaleTime, yScale: ScaleLinear, pixelRatio?: number): void;
}
