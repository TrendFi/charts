import { Container, Renderer } from "@ui/renderer";
import { DepthCurve } from "./display-objects";
import { Colors, Dimensions } from "./helpers";
type ContentsColors = Pick<Colors, "buyFill" | "buyStroke" | "sellFill" | "sellStroke">;
type ContentsDimensions = Pick<Dimensions, "strokeWidth">;
/**
 * Responsible for drawing area curves for depth chart.
 */
export declare class Contents {
    stage: Container;
    renderer: Renderer;
    buyCurve: DepthCurve;
    sellCurve: DepthCurve;
    colors: ContentsColors;
    dimensions: ContentsDimensions;
    constructor(options: {
        view: HTMLCanvasElement;
        resolution: number;
        width: number;
        height: number;
        colors: ContentsColors;
        dimensions: ContentsDimensions;
    });
    render(): void;
    update(buyPoints: [number, number][], sellPoints: [number, number][]): void;
}
export {};
