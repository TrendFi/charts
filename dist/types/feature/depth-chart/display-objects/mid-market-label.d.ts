import { Container } from "@ui/renderer";
import { Colors } from "../helpers";
type MidMarketPriceLabelColors = Pick<Colors, "backgroundSurface" | "textPrimary" | "textSecondary">;
/**
 * Draw a title and subtitle at the top of the chart
 */
export declare class MidMarketPriceLabel extends Container {
    private price;
    private label;
    private background;
    constructor(colors: MidMarketPriceLabelColors);
    update(x: number, y: number, anchor: {
        x: number;
        y: number;
    }, resolution: number | undefined, colors: MidMarketPriceLabelColors, price?: string, title?: string): void;
    get width(): number;
    get height(): number;
}
export {};
