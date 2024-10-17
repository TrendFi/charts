/**
 * Information to support rendering a tooltip.
 */
export interface Series {
    color: string;
    name: string;
    value: string;
}
export type TooltipProps = {
    value: number | Date;
    label: {
        primary: string;
        sub: string | null;
    };
    series: Series[];
};
/**
 * Tooltip for area, line and price charts.
 */
export declare const Tooltip: ({ label, series }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
