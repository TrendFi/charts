import * as types from "@util/types";
export declare class CrosshairElement implements types.RenderableElement {
    draw(ctx: CanvasRenderingContext2D, xScale: types.ScaleTime, yScale: types.ScaleLinear, pixelRatio: number | undefined, position: [Date | null, number | null], color: string): void;
}
