import { Graphics } from "@ui/renderer";
/**
 * Draw a rectangle
 */
export declare class Rect extends Graphics {
    private alpha;
    private color;
    constructor(color?: number, alpha?: number);
    update(x: number, y: number, width: number, height: number, color: number): void;
}
