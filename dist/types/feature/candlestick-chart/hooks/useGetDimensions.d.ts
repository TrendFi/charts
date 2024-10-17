export interface Dimensions {
    strokeWidth: number;
    innerPadding: number;
    maxPaddingInPixels: number;
}
export declare function useGetDimensions(element: HTMLElement | null): Dimensions;
