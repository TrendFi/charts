/// <reference types="react" />
import { TooltipProps } from "@ui/components";
import { ThemeVariant } from "@util/types";
/**
 * Add custom annotations to tooltip props.
 */
export type CustomTooltipProps<A> = TooltipProps & {
    annotations?: A[];
};
export interface Data {
    /**
     * Used for tooltips.
     */
    cols: readonly [string, string];
    /**
     * Each row represents a data point.
     */
    rows: ReadonlyArray<[Date, number]>;
}
export type PriceChartProps<A> = {
    /**
     * A data series.
     */
    data: Data;
    /**
     * An array the same length as `data["rows"]` where each element is an array of length equal to the number of series.
     * Currently only used by custom tooltips which expect annotations of type `A`.
     */
    annotations?: A[][];
    /**
     * Whether to allow the user to pan and zoom.
     */
    interactive?: boolean;
    /**
     * Override the default text to display when there is not enough data.
     */
    notEnoughDataText?: React.ReactNode;
    /**
     * Used to format values on price axis.
     */
    priceFormat?: (price: number) => string;
    /**
     * Light or dark theme.
     */
    theme?: ThemeVariant;
    /**
     * Override the default tooltip.
     */
    tooltip?: (props: CustomTooltipProps<A>) => JSX.Element;
};
/**
 * Draw a historical price chart.
 */
export declare const PriceChart: <A>({ data, annotations, interactive, notEnoughDataText, priceFormat, theme, tooltip, }: PriceChartProps<A>) => import("react/jsx-runtime").JSX.Element;
