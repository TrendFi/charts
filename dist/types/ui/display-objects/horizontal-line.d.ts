import { Graphics } from "@ui/renderer";
/**
 * Draws a horizontal line
 */
export declare class HorizontalLine extends Graphics {
    private width;
    private color;
    private lineDash;
    constructor(width?: number, color?: number, lineDash?: number[]);
    update(y: number, width: number, resolution?: number): void;
}
