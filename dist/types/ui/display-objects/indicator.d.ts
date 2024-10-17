import { Container } from "@ui/renderer";
/**
 * Draw an indicator at a given price and volume
 */
export declare class Indicator extends Container {
    private innerCircle;
    private outerCircle;
    private color;
    constructor(color?: number);
    update(x: number, y: number, color: number): void;
}
