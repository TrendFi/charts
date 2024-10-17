import { RefCallback, RefObject } from "react";
export type ObservedSize = {
    width: number | undefined;
    height: number | undefined;
    devicePixelContentBoxSizeInlineSize: number | undefined;
    devicePixelContentBoxSizeBlockSize: number | undefined;
};
type ResizeHandler = (size: ObservedSize) => void;
type HookResponse<T extends HTMLElement> = {
    ref: RefCallback<T>;
} & ObservedSize;
declare function useResizeObserver<T extends HTMLElement>(opts?: {
    ref?: RefObject<T> | T | null | undefined;
    onResize?: ResizeHandler;
}): HookResponse<T>;
export default useResizeObserver;
