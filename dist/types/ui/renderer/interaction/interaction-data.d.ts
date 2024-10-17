import { DisplayObject } from "../display";
import { Point } from "../math";
import { PennantPointerEvent } from "./interaction-manager";
export type InteractivePointerEvent = PointerEvent | TouchEvent | MouseEvent | WheelEvent;
export declare class InteractionData {
    button: number;
    global: Point;
    identifier: number | null;
    target: DisplayObject | null;
    originalEvent: InteractivePointerEvent | null;
    pointerType: string | null;
    constructor();
    copyEvent(event: Touch | PennantPointerEvent): void;
    reset(): void;
}
