import { Container } from "@ui/renderer";
import { ScaleLinear, ScaleTime } from "@util/types";
/**
 * Draws vertical grid lines
 */
export declare class HorizontalGrid extends Container {
    /**
     * Cache ticks
     */
    private nodeByKeyValue;
    private color;
    constructor(color?: number);
    update(scale: ScaleLinear | ScaleTime, width: number, height: number, resolution?: number): void;
}
