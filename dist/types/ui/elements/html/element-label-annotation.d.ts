import "./element-label-annotation.css";
import { LabelAnnotation, ScaleLinear, ScaleTime } from "@util/types";
import { Selection } from "d3-selection";
export interface RenderableHTMLElement {
    draw(selection: Selection<Element, any, any, any>, xScale: ScaleTime, yScale: ScaleLinear): void;
}
export declare class LabelAnnotationHtmlElement implements RenderableHTMLElement {
    readonly labels: LabelAnnotation[];
    constructor(cfg: {
        labels: LabelAnnotation[];
    });
    draw(selection: Selection<Element, any, any, any>, _xScale: ScaleTime, yScale: ScaleLinear): void;
}
