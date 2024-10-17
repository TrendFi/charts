import * as types from "@util/types";
export declare class DummyElement implements types.RenderableElement {
    readonly x: Date;
    constructor(cfg: any);
    draw(_ctx: CanvasRenderingContext2D, _xScale: types.ScaleTime, _yScale: types.ScaleLinear): void;
}
