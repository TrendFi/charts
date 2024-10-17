import { Matrix } from "../math";
import { Renderer } from "./renderer";
export declare class CanvasContextSystem {
    private renderer;
    rootContext: CanvasRenderingContext2D | null;
    activeContext: CanvasRenderingContext2D | null;
    activeResolution: number;
    private _projTransform;
    constructor(renderer: Renderer);
    setContextTransform(transform: Matrix, roundPixels?: boolean, localResolution?: number): void;
}
