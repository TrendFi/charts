import EventEmitter from "eventemitter3";
import { Colors } from "./helpers";
import { Data } from "./price-chart";
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
    private timeScale;
    private timeZoom;
    private lastTimeZoomTransform;
    private _data;
    private priceFormat;
    private _colors;
    constructor(options: {
        chartView: HTMLCanvasElement;
        axisView: HTMLCanvasElement;
        resolution: number;
        width: number;
        height: number;
        priceFormat: (price: number) => string;
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
    get data(): Data;
    set data(data: Data);
    get height(): number;
    get width(): number;
    set interactive(interactive: boolean);
}
