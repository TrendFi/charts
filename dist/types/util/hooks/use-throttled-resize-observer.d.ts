/// <reference types="react" />
export declare function useThrottledResizeObserver<T extends HTMLElement>(wait: number): {
    width: number | undefined;
    height: number | undefined;
    devicePixelContentBoxSizeInlineSize: number | undefined;
    devicePixelContentBoxSizeBlockSize: number | undefined;
    ref: import("react").RefCallback<T>;
};
