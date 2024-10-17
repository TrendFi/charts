import { Container } from "@ui/renderer";
/**
 * Draw a crosshair
 */
export declare class Crosshair extends Container {
    private horizontalLine;
    private verticalLine;
    constructor(width?: number, color?: number, lineDash?: number[]);
    update(x: number | null, y: number | null, width: number, height: number, resolution?: number): void;
}
