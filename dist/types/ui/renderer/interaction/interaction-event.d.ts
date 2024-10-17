import { DisplayObject } from "../display";
import { InteractionData } from "./interaction-data";
export type InteractionCallback = (interactionEvent: InteractionEvent, displayObject: DisplayObject, hit?: boolean) => void;
export declare class InteractionEvent {
    stopped: boolean;
    stopsPropagatingAt: DisplayObject | null;
    stopPropagationHint: boolean;
    target: DisplayObject | null;
    currentTarget: DisplayObject | null;
    type: string | null;
    data: InteractionData | null;
    constructor();
    stopPropagation(): void;
    reset(): void;
}
