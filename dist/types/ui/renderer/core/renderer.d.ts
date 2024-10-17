import { Matrix } from "../math";
import { AbstractRenderer, RendererOptions } from "./abstract-renderer";
import { CanvasContextSystem } from "./canvas-context-system";
import { CanvasMaskSystem } from "./canvas-mask-system";
import { GeometrySystem } from "./geometry/geometry-system";
import { RenderableObject } from "./renderable-object";
export declare class Renderer extends AbstractRenderer {
    mask: CanvasMaskSystem | null;
    canvasContext: CanvasContextSystem | null;
    context: CanvasRenderingContext2D;
    geometry: GeometrySystem | null;
    private _projTransform;
    constructor(options?: RendererOptions);
    render(displayObject: RenderableObject): void;
    clear(clearColor?: string, alpha?: number): void;
    setContextTransform(transform: Matrix, roundPixels?: boolean, localResolution?: number): void;
}
