import { TooltipProps } from "../tooltip/tooltip";
/**
 * Tooltip for price chart.
 */
export declare const CustomTooltip: ({ value, series, annotations, }: TooltipProps & {
    annotations?: {
        volume: number;
        marketCap: number;
    }[] | undefined;
}) => import("react/jsx-runtime").JSX.Element;
