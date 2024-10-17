import { Container } from "@ui/renderer";
import { Colors } from "../helpers";
type LabelColors = Pick<Colors, "backgroundLabel" | "textPrimary">;
/**
 * Draw a label
 */
export declare class Label extends Container {
    private text;
    private background;
    constructor();
    update(text: string, x: number, y: number, anchor: {
        x: number;
        y: number;
    }, resolution: number | undefined, colors: LabelColors): void;
    get width(): number;
    get height(): number;
}
export {};
