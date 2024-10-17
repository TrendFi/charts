/// <reference types="react" />
import "../../styles/variables.css";
import { ThemeVariant } from "@util/types";
/**
 * Standard font size in CSS pixels
 */
export declare const FONT_SIZE = 12;
/**
 * Height of the bottom price axis
 */
export declare const AXIS_HEIGHT: number;
export type PriceLevel = {
    price: number;
    volume: number;
};
export type DepthChartProps = {
    data: {
        buy: PriceLevel[];
        sell: PriceLevel[];
    };
    /**
     *  Used to format values on price axis.
     */
    priceFormat?: (price: number) => string;
    /**
     * Used to format values volume axis,
     */
    volumeFormat?: (price: number) => string;
    /**
     * Indicative price if the auction ended now, 0 if not in auction mode.
     */
    indicativePrice?: number;
    /**
     *  Arithmetic average of the best bid price and best offer price.
     */
    midPrice?: number;
    /**
     * Override the default text to display when there is not enough data.
     */
    notEnoughDataText?: React.ReactNode;
    /**
     * Light or dark theme
     */
    theme?: ThemeVariant;
};
export interface DepthChartHandle {
    /**
     * Simulate the user hovering over the chart at a particular price
     */
    update(price: number): void;
    /**
     * Simulate the user's mouse leaving the chart
     */
    clear(): void;
}
export declare const DepthChart: import("react").ForwardRefExoticComponent<DepthChartProps & import("react").RefAttributes<DepthChartHandle>>;
