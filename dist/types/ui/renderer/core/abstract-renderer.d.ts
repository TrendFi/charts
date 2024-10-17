import { Rectangle } from "../math";
import { RenderableObject } from "./renderable-object";
export interface RendererOptions {
    width?: number;
    height?: number;
    backgroundColor?: number;
    backgroundAlpha?: number;
    resolution?: number;
    view?: HTMLCanvasElement;
}
export interface RendererPlugins {
    [key: string]: any;
}
export declare abstract class AbstractRenderer {
    /** The resolution / device pixel ratio of the renderer. */
    resolution: number;
    /** The canvas element that everything is drawn to. */
    readonly view: HTMLCanvasElement;
    /**
     * Measurements of the screen. (0, 0, screenWidth, screenHeight).
     *
     * Its safe to use as filterArea or hitArea for the whole stage.
     */
    readonly screen: Rectangle;
    /** Collection of plugins */
    readonly plugins: RendererPlugins;
    protected _backgroundColor: number;
    protected _backgroundColorString: string;
    _backgroundColorRgba: number[];
    _lastObjectRendered: RenderableObject | null;
    constructor(options?: Partial<RendererOptions>);
    resize(screenWidth: number, screenHeight: number): void;
    destroy(): void;
    get width(): number;
    get height(): number;
    get backgroundColor(): number;
    set backgroundColor(value: number);
    get backgroundAlpha(): number;
    set backgroundAlpha(value: number);
}
