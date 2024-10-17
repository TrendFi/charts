import { RenderableHTMLElement } from "@ui/elements";
import { Interval, RenderableElement, Viewport } from "@util/types";
import { MutableRefObject } from "react";
import { Colors } from "../../feature/candlestick-chart/helpers";
export type Panes<T> = {
    [id: string]: T;
};
type ChartPane = {
    id: string;
    ref: React.RefObject<HTMLDivElement>;
    data: any[];
    renderableElements: RenderableElement[];
    yEncodingFields: string[];
    labels: RenderableHTMLElement[];
    labelLines: RenderableElement[];
};
/**
 * The Core class renders multiple plot areas which share a common x-axis.
 *
 * Zooming and panning of plot areas is supported. Dragging the axes will zoom the apprpriate dimension.
 */
export declare class Core {
    private listeners;
    private _interval;
    private _decimalPlaces;
    private _positionDecimalPlaces;
    private initialNumCandles;
    private isPinned;
    private isFreePan;
    private isSimple;
    private _colors;
    private dates;
    private xAxis;
    private xAxisInteraction;
    private xElement;
    private xScale;
    private xTransform;
    private xZoom;
    private yAxes;
    private yAxisInteractions;
    private yElements;
    private yScales;
    private yTransforms;
    private yZooms;
    private plotAreas;
    private plotAreaInteractions;
    private plotAreaAnnotations;
    private plotAreaElements;
    constructor(panes: Panes<ChartPane>, axis: {
        ref: MutableRefObject<HTMLDivElement>;
        data: any[];
    }, initialViewport: Viewport, decimalPlaces: number | undefined, positionDecimalPlaces: number | undefined, simple: boolean | undefined, initialNumCandles: number | undefined, colors: Colors);
    draw(): void;
    interval(interval: Interval): this;
    on(typenames: string, callback: (this: object, ...args: any[]) => void): this;
    panBy(n: number): void;
    initialize(initialViewport?: Viewport): void;
    reset(): void;
    pinXAxis(): void;
    resetXAxis(): void;
    resetYAxis(id: string): void;
    /**
     * Updates the chart when new data arrives
     *
     * @param panes
     * @param axis
     */
    update(panes: Panes<ChartPane>, axis: {
        ref: React.MutableRefObject<HTMLDivElement>;
        data: any[];
    }): this;
    private zoom;
    zoomIn(delta: number): void;
    zoomOut(delta: number): void;
    set colors(colors: Colors);
}
export {};
