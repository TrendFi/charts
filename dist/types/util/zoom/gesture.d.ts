import EventEmitter from "eventemitter3";
import { ZoomTransform } from "./transform";
import { Zoom } from "./zoom";
export declare class Gesture<T extends EventEmitter & {
    zoom: Zoom;
}> {
    that: T;
    active: number;
    taps: number;
    touch0: any;
    touch1: any;
    sourceEvent: Event | null;
    wheel: number | null;
    wheelHorizontal: boolean;
    mouse: [[number, number], [number, number]] | [null, null];
    zooming: boolean;
    constructor(that: T);
    start(transform?: ZoomTransform): void;
    zoom(transform: ZoomTransform, point: [number, number]): void;
    end(): void;
}
