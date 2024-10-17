import { RenderableHTMLElement } from "@ui/elements";
import { ScaleLinear, ScaleTime } from "@util/types";
import { Selection } from "d3-selection";
export declare class PlotAreaAnnotations {
    private listeners;
    private _xScale;
    private _yScale;
    private _labels;
    constructor(x: ScaleTime, y: ScaleLinear, labels: RenderableHTMLElement[]);
    draw(selection: Selection<Element, any, any, any>): void;
    labels: (labels: RenderableHTMLElement[]) => this;
    on(typenames: string, callback: (this: object, ...args: any[]) => void): this;
    xScale: (x: ScaleTime) => this;
    yScale: (y: ScaleLinear) => this;
}
