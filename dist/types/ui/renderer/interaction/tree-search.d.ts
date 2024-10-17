import { DisplayObject } from "../display";
import { InteractionCallback, InteractionEvent } from "./interaction-event";
/**
 * Strategy how to search through stage tree for interactive objects
 */
export declare class TreeSearch {
    private readonly _tempPoint;
    constructor();
    recursiveFindHit(interactionEvent: InteractionEvent, displayObject: DisplayObject, func?: InteractionCallback, hitTest?: boolean, interactive?: boolean): boolean;
    findHit(interactionEvent: InteractionEvent, displayObject: DisplayObject, func?: InteractionCallback, hitTest?: boolean): boolean;
}
