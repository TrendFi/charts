import { PositionalElement, ScaleLinear, ScaleTime } from "@util/types";
import { Gradient } from "@util/vega-lite";
export type Area = {
    points: [Date, number, number][];
    fill: string | Gradient;
    line: string | undefined;
};
export declare class AreaElement implements PositionalElement {
    readonly points: [Date, number, number][];
    readonly fill: string | Gradient;
    readonly line: string | undefined;
    areaGenerator: import("d3-shape").Area<[Date, number, number]>;
    lineGenerator: import("d3-shape").Line<[Date, number, number]>;
    get x(): Date;
    constructor(cfg: any);
    draw(ctx: CanvasRenderingContext2D, xScale: ScaleTime, yScale: ScaleLinear): void;
}
