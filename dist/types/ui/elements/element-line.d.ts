import { PositionalElement, ScaleLinear, ScaleTime } from "@util/types";
export type Line = {
    points: [Date, number][];
    color: string;
};
export declare class LineElement implements PositionalElement {
    readonly points: [Date, number][];
    readonly color: string;
    lineGenerator: import("d3-shape").Line<[Date, number]>;
    get x(): Date;
    constructor(cfg: any);
    draw(ctx: CanvasRenderingContext2D, xScale: ScaleTime, yScale: ScaleLinear, pixelRatio?: number): void;
}
