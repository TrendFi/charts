import { Renderer } from "../core";
import { Graphics } from "./graphics";
export declare class GraphicsRenderer {
    renderer: Renderer;
    private _tempMatrix;
    constructor(renderer: Renderer);
    render(graphics: Graphics): void;
    private paintPolygonStroke;
    private _calcCanvasStyle;
}
