/// <reference types="react" />
import "allotment/dist/style.css";
import "../../styles/variables.css";
import "./candlestick-chart.css";
import { ChartElement, ChartType, Interval, Overlay, Study, ThemeVariant, Viewport } from "@util/types";
export interface PriceMonitoringBounds {
    minValidPrice: number;
    maxValidPrice: number;
    referencePrice: number;
}
export type Options = {
    chartType?: ChartType;
    overlays?: Overlay[];
    studies?: Study[];
    priceMonitoringBounds?: PriceMonitoringBounds[];
    simple?: boolean;
    initialNumCandlesToDisplay?: number;
    initialNumCandlesToFetch?: number;
    notEnoughDataText?: React.ReactNode;
    /**
     * Preferred size of a study pane. The Chart will attempt to use this size when adding a study pane (including on initial mount) as well as when a user double clicks a sash, or the `reset` method is called on the Chart instance.
     * @remarks The size can either be a number or a string.
     *
     * If it is a number it will be interpreted as a number of pixels.
     *
     * If it is a string it should end in either "px" or "%". If it ends in "px" it will be interpreted as a number of pixels, e.g. "120px".
     *
     * If it ends in "%" it will be interpreted as a percentage of the size of the main pane, e.g. "50%".
     */
    studySize?: number | string;
    studySizes?: Array<number | string>;
};
export interface Dataset {
    /**
     * Each row represents a data point.
     */
    rows: Array<{
        date: Date;
        open: number;
        high: number;
        low: number;
        close: number;
        buy: boolean;
        sell: boolean;
        hold: boolean;
        volume: number;
    }>;
}
export type CandlestickChartProps = {
    /** Responsible for fetching data */
    dataset: Dataset;
    initialViewport?: Viewport;
    interval: Interval;
    options?: Options;
    theme?: ThemeVariant;
    drawThrottleMs?: number;
    onOptionsChanged?: (options: Options) => void;
    onPaneChanged?: (size: number[]) => void;
    onViewportChanged?: (viewport: Viewport) => void;
};
export declare const CandlestickChart: import("react").ForwardRefExoticComponent<CandlestickChartProps & import("react").RefAttributes<ChartElement>>;
