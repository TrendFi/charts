export interface Colors {
    buyFill: number;
    buyStroke: number;
    sellFill: number;
    sellStroke: number;
    backgroundSurface: number;
    textPrimary: number;
    textSecondary: number;
    /**
     * Behind labels on axis, can be useful to prevent unclear numbers
     */
    backgroundLabel: number;
}
export declare function getColors(element: HTMLElement | null): Colors;
