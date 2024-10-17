import { Container, Renderer } from "@ui/renderer";
import { ScaleLinear } from "d3-scale";
import EventEmitter from "eventemitter3";
import { Colors } from "./helpers";
type UiColors = Pick<Colors, "backgroundSurface" | "buyStroke" | "sellStroke" | "textPrimary" | "textSecondary" | "backgroundLabel">;
export declare class Gesture {
    that: UI;
    active: number;
    taps: number;
    touch0: any;
    touch1: any;
    sourceEvent: Event | null;
    wheel: number | null;
    zooming: boolean;
    constructor(that: UI);
    start(): void;
    zoom(scale: number): void;
    end(): void;
}
/**
 * Reponsible for drawing axes and handling interactivity for depth chart
 */
export declare class UI extends EventEmitter {
    stage: Container;
    renderer: Renderer;
    /**
     * The scale extent to the specified array of numbers [k0, k1] where k0 is the minimum allowed scale factor
     * and k1 is the maximum allowed scale factor.
     */
    scaleExtent: number[];
    colors: UiColors;
    private prices;
    private volumes;
    private priceLabels;
    private volumeLabels;
    private priceScale;
    private midPrice;
    private _indicativePrice;
    /**
     * The current scale.
     */
    private transform;
    private horizontalAxis;
    private verticalAxis;
    private buyIndicator;
    private sellIndicator;
    private auctionIndicator;
    private buyPriceText;
    private buyVolumeText;
    private sellPriceText;
    private sellVolumeText;
    private auctionPriceText;
    private auctionVolumeText;
    private buyOverlay;
    private sellOverlay;
    private midMarketPriceLabel;
    private midPriceLine;
    private separator;
    private lastEvent;
    private gesture;
    private originalTransform;
    constructor(options: {
        view: HTMLCanvasElement;
        resolution: number;
        width: number;
        height: number;
        colors: UiColors;
    });
    render(): void;
    update(prices: number[], volumes: number[], midPrice: number, priceLabels: string[], volumeLabels: string[], midPriceLabel: string, midPriceTitle: string, priceScale: ScaleLinear<number, number>, volumeScale: ScaleLinear<number, number>): void;
    updatePrice(price: number): void;
    clearPrice(): void;
    private onPointerMove;
    destroy(): void;
    private onPointerOut;
    set indicativePrice(price: number);
}
export {};
