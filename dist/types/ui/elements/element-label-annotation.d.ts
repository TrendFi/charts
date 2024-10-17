import { LabelAnnotation, RenderableElement, ScaleLinear, ScaleTime } from "@util/types";
import { Colors } from "../../feature/candlestick-chart/helpers";
export declare function cumsum(values: number[]): number[];
export declare class LabelAnnotationElement implements RenderableElement {
    readonly labels: LabelAnnotation[];
    constructor(cfg: {
        labels: LabelAnnotation[];
    });
    draw(ctx: CanvasRenderingContext2D, xScale: ScaleTime, yScale: ScaleLinear, pixelRatio: number | undefined, colors: Colors): void;
}
