import { Container, Renderer } from "@ui/renderer";
import { ScaleLinear, ScaleTime } from "@util/types";
import EventEmitter from "eventemitter3";
import { Zoom } from "../../util/zoom";
import { Colors } from "./helpers";
import { Data } from "./line-chart";
type UiColors = Pick<Colors, "accent1" | "accent2" | "accent3" | "accent4" | "accent5" | "accent6" | "backgroundSurface" | "positiveStroke" | "emphasis100" | "emphasis200" | "negativeStroke" | "textPrimary" | "textSecondary">;
/**
 * Reponsible for drawing axes and handling interactivity for depth chart
 */
export declare class UI extends EventEmitter {
    colors: UiColors;
    renderer: Renderer;
    /**
     * The scale extent to the specified array of numbers [k0, k1] where k0 is the minimum allowed scale factor
     * and k1 is the maximum allowed scale factor.
     */
    scaleExtent: number[];
    stage: Container;
    zoom: Zoom;
    private _interactive;
    private data;
    private lastPriceZoomTransform;
    private lastXZoomTransform;
    private priceScale;
    private priceZoom;
    private xScale;
    private xZoom;
    private firstPoint;
    private gesture;
    private isZooming;
    private lastEvent;
    private horizontalAxis;
    private verticalAxis;
    private verticalAxisSeparator;
    private horizontalAxisSeparator;
    private crosshair;
    private indicator;
    private priceLabel;
    private xLabel;
    private hitBox;
    private priceFormat;
    private xFormat;
    constructor(options: {
        view: HTMLCanvasElement;
        resolution: number;
        width: number;
        height: number;
        colors: UiColors;
        priceFormat: (price: number) => string;
        xFormat: (x: number) => string;
    });
    render(): void;
    update(data: Data, xScale: ScaleLinear | ScaleTime, xFormat: (x: number) => string, priceScale: ScaleLinear, priceFormat: (price: number) => string, yAxisTickFormat?: string): void;
    destroy(): void;
    private onWheel;
    private onPointerDown;
    private onPointerMove;
    private onZoomStartHorizontalAxis;
    private onZoomHorizontalAxis;
    private onZoomVerticalAxis;
    private hideTooltips;
    private onPointerOut;
    set interactive(interactive: boolean);
}
export {};
