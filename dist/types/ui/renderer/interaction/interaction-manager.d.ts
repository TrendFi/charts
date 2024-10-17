import EventEmitter from "eventemitter3";
import { AbstractRenderer } from "../core";
import { DisplayObject } from "../display";
import { PointData } from "../math";
import { InteractionData } from "./interaction-data";
import { InteractionCallback, InteractionEvent } from "./interaction-event";
import { TreeSearch } from "./tree-search";
export interface InteractionManagerOptions {
    interactionFrequency?: number;
}
export interface DelayedEvent {
    displayObject: DisplayObject;
    eventString: string;
    eventData: InteractionEvent;
}
export declare class InteractionManager extends EventEmitter {
    readonly activeInteractionData: {
        [key: number]: InteractionData;
    };
    readonly supportsTouchEvents: boolean;
    readonly supportsPointerEvents: boolean;
    cursor: string | null;
    delayedEvents: DelayedEvent[];
    interactionDataPool: InteractionData[];
    interactionFrequency: number;
    moveWhenInside: boolean;
    renderer: AbstractRenderer;
    resolution: number;
    search: TreeSearch;
    cursorStyles: {
        [key: string]: string | ((mode: string) => void) | CSSStyleDeclaration;
    };
    currentCursorMode: string | null;
    eventData: InteractionEvent;
    mouse: InteractionData;
    protected interactionDOMElement: HTMLElement | null;
    protected mouseOverRenderer: boolean;
    private _tempDisplayObject;
    private readonly _eventListenerOptions;
    constructor(renderer: AbstractRenderer, options?: InteractionManagerOptions);
    setTargetElement(element: HTMLElement, resolution?: number): void;
    processInteractive(interactionEvent: InteractionEvent, displayObject: DisplayObject, func?: InteractionCallback, hitTest?: boolean): boolean;
    mapPositionToPoint(point: PointData, x: number, y: number): void;
    setCursorMode(mode: string | null): void;
    destroy(): void;
    private addEvents;
    private removeEvents;
    private delayDispatchEvent;
    private onPointerMove;
    private processPointerMove;
    private processPointerOverOut;
    private onPointerDown;
    private processPointerDown;
    private onPointerOut;
    private onPointerOver;
    private onPointerUp;
    private processPointerUp;
    private onPointerComplete;
    private onDblClick;
    private processDblClick;
    private onWheel;
    private processWheel;
    private releaseInteractionDataForPointerId;
    private dispatchEvent;
    private configureInteractionEventForDOMEvent;
    private normalizeToPointerData;
    private getInteractionDataForPointerId;
    get lastObjectRendered(): DisplayObject;
}
export interface PennantPointerEvent extends PointerEvent, WheelEvent {
    isPrimary: boolean;
    width: number;
    height: number;
    tiltX: number;
    tiltY: number;
    pointerType: string;
    pointerId: number;
    pressure: number;
    twist: number;
    tangentialPressure: number;
    deltaX: number;
    deltaY: number;
    isNormalized: boolean;
}
