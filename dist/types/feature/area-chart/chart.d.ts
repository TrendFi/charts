import { Series } from "d3-shape";
import EventEmitter from "eventemitter3";
import { Data, Row } from "./area-chart";
import { Colors } from "./helpers";
export declare function isDateData(array: ReadonlyArray<Row>): array is ReadonlyArray<[Date, ...number[]]>;
export type SeriesData = (Series<{
    [key: string]: number;
}, string> & {
    i: (number | Date)[];
})[];
/**
 * Price chart class. Its main roles are to manage interactivity, e.g. zooming and panning
 * as well as requesting contents and ui to update and render.
 */
export declare class Chart extends EventEmitter {
    private contents;
    private ui;
    private priceScale;
    private priceZoom;
    private lastPriceZoomTransform;
    private xScale;
    private xZoom;
    private lastXZoomTransform;
    private series;
    private priceFormat;
    private xFormat;
    private _colors;
    constructor(options: {
        chartView: HTMLCanvasElement;
        axisView: HTMLCanvasElement;
        resolution: number;
        width: number;
        height: number;
        priceFormat: (price: number) => string;
        xFormat: (x: number) => string;
        colors: Colors;
    });
    render(): void;
    resize(width: number, height: number): void;
    reset(): void;
    destroy(): void;
    private update;
    private onZoomStart;
    private onZoomEnd;
    private onZoom;
    private onMouseMove;
    private onMouseOut;
    private onZoomStartHorizontalAxis;
    private onZoomHorizontalAxis;
    private onZoomVerticalAxis;
    set colors(colors: Colors);
    set data(data: Data);
    get height(): number;
    get width(): number;
    set interactive(interactive: boolean);
}
