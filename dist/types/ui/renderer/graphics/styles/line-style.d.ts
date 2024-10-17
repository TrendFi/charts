import { FillStyle } from "./fill-style";
export declare class LineStyle extends FillStyle {
    width: number;
    lineDash: never[];
    clone(): LineStyle;
    reset(): void;
}
