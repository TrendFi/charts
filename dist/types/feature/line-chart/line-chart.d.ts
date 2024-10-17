/// <reference types="react" />
import { TooltipProps } from "@ui/components";
import { ThemeVariant } from "@util/types";
/**
 * Add custom annotations to tooltip props.
 */
export type CustomTooltipProps<A> = TooltipProps & {
    annotations?: A[];
};
/**
 * A set of data points with the same x-axis location.
 */
export type Row = readonly [Date, ...number[]] | readonly [number, ...number[]];
export interface Data {
    /**
     * Used for tooltips.
     */
    cols: ReadonlyArray<string>;
    /**
     * Each row represents a set of data points with the same x-axis location.
     */
    rows: ReadonlyArray<Row>;
}
export type LineChartProps<A> = {
    /**
     * One or more data series.
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
     * Specifier for y axis tick format
     */
    yAxisTickFormat?: string;
    /**
     * Light or dark theme.
     */
    theme?: ThemeVariant;
    /**
     * Override the default tooltip.
     */
    tooltip?: (props: CustomTooltipProps<A>) => JSX.Element;
    /**
     * Used to format values on x axis if numbers.
     */
    xFormat?: (x: number) => string;
};
/**
 * Draw a line chart. Supports multiple line series.
 */
export declare const LineChart: <A>({ data, annotations, interactive, notEnoughDataText, priceFormat, theme, tooltip, xFormat, yAxisTickFormat, }: LineChartProps<A>) => import("react/jsx-runtime").JSX.Element;
