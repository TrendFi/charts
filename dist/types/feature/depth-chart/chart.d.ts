import EventEmitter from "eventemitter3";
import { PriceLevel } from "./depth-chart";
import { Colors, Dimensions } from "./helpers";
export declare class Chart extends EventEmitter {
    private chart;
    private axis;
    private prices;
    private volumes;
    private priceLabels;
    private volumeLabels;
    private _span;
    private initialSpan;
    private maxPriceDifference;
    private initialPriceDifference;
    private _data;
    /** Indicative price if the auction ended now, 0 if not in auction mode */
    private _indicativePrice;
    /** Arithmetic average of the best bid price and best offer price. */
    private _midPrice;
    private priceFormat;
    private volumeFormat;
    private _colors;
    private _dimensions;
    constructor(options: {
        chartView: HTMLCanvasElement;
        axisView: HTMLCanvasElement;
        resolution: number;
        width: number;
        height: number;
        priceFormat: (price: number) => string;
        volumeFormat: (volume: number) => string;
        colors: Colors;
        dimensions: Dimensions;
    });
    updatePrice(price: number): void;
    clearPrice(): void;
    render(): void;
    resize(width: number, height: number): void;
    destroy(): void;
    private update;
    set colors(colors: Colors);
    set dimensions(dimensions: Dimensions);
    get data(): {
        buy: PriceLevel[];
        sell: PriceLevel[];
    };
    set data(data: {
        buy: PriceLevel[];
        sell: PriceLevel[];
    });
    set indicativePrice(price: number);
    set midPrice(price: number);
    get height(): number;
    get width(): number;
    get span(): number;
    set span(span: number);
}
