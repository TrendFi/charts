import { Container } from "@ui/renderer";
import { ScaleLinear } from "@util/types";
/**
 * Draws vertical grid lines
 */
export declare class VerticalGrid extends Container {
    /**
     * Cache ticks
     */
    private nodeByKeyValue;
    private color;
    constructor(color?: number);
    update(scale: ScaleLinear, width: number, height: number, resolution?: number): void;
}
