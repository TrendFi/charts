import { Renderer } from "../core";
import { RenderableObject } from "../core/renderable-object";
import { Rectangle } from "../math";
import { DisplayObject } from "./display-object";
/**
 * Container is a general-purpose display object that holds children.
 * It also adds built-in support for advanced rendering features like masking and filtering.
 */
export declare class Container extends DisplayObject implements RenderableObject {
    /**
     * The array of children of this container.
     */
    readonly children: DisplayObject[];
    parent: Container | null;
    constructor();
    /**
     * Recalculates the bounds of the container.
     */
    calculateBounds(): void;
    /**
     * Adds one or more children to the container.
     *
     * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
     */
    addChild<T extends DisplayObject[]>(...children: T): T[0];
    /**
     * Removes one or more children from the container.
     */
    removeChild<T extends DisplayObject[]>(...children: T): T[0] | null;
    /**
     * Removes all children from this container that are within the begin and end indexes.
     */
    removeChildren(beginIndex?: number, endIndex?: number): DisplayObject[];
    render(renderer: Renderer): void;
    /**
     * Updates the transform on all children of this container for rendering.
     */
    updateTransform(): void;
    /**
     * Retrieves the local bounds of the displayObject as a rectangle object.
     */
    getLocalBounds(rect?: Rectangle, skipChildrenUpdate?: boolean): Rectangle;
    destroy(): void;
    protected _render(_renderer: Renderer): void;
    protected _calculateBounds(): void;
}
