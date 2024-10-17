import { Container } from "@ui/renderer";
/**
 * Draw an indicator at a given price and volume
 */
export declare class Indicator extends Container {
    private circle;
    private line;
    private color;
    constructor(color?: number);
    update(x: number, y: number, width: number): void;
}
