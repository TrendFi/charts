export interface Colors {
    backgroundSurface: number;
    positiveFill: number;
    positiveStroke: number;
    emphasis100: number;
    emphasis200: number;
    negativeFill: number;
    negativeStroke: number;
    textPrimary: number;
    textSecondary: number;
    accent1: number;
    accent2: number;
    accent3: number;
    accent4: number;
    accent5: number;
    accent6: number;
}
export declare function getColors(element: HTMLElement | null): Colors;
