import { RenderableElement, ScaleLinear, ScaleTime } from "@util/types";
export declare class GridElement implements RenderableElement {
    draw(ctx: CanvasRenderingContext2D, xScale: ScaleTime, yScale: ScaleLinear, pixelRatio: number | undefined, color: string): void;
}
