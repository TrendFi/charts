import { Graphics } from "@ui/renderer";
/**
 * Draw a vertical line
 */
export declare class VerticalLine extends Graphics {
    private width;
    private color;
    private lineDash;
    constructor(width?: number, color?: number, lineDash?: number[]);
    update(x: number, height: number, resolution?: number): void;
}
