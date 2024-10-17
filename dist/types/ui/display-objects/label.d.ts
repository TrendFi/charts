import { Container } from "@ui/renderer";
import { Colors } from "../../feature/line-chart/helpers";
type LabelColors = Pick<Colors, "backgroundSurface" | "textPrimary">;
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
