import EventEmitter from "eventemitter3";
import { Renderer } from "../core";
import { Cursor, InteractionTrackingData } from "../interaction";
import { Matrix, Point, Rectangle, Transform } from "../math";
import { Bounds } from "./bounds";
import { Container } from "./container";
interface HitArea {
    contains(x: number, y: number): boolean;
}
/**
 * The base class for all objects that are rendered on the screen.
 */
export declare abstract class DisplayObject extends EventEmitter {
    cursor: Cursor | string | null;
    hitArea: HitArea | null;
    interactive: boolean;
    interactiveChildren: boolean;
    /** The display object container that contains this display object. */
    parent: DisplayObject | null;
    transform: Transform;
    /** The visibility of the object. If false the object will not be drawn. */
    visible: boolean;
    _trackedPointers: {
        [x: number]: InteractionTrackingData;
    } | undefined;
    isMask: boolean;
    _mask: Container | null;
    _bounds: Bounds;
    _localBounds: Bounds | null;
    protected _boundsID: number;
    protected _boundsRect: Rectangle | null;
    protected _localBoundsRect: Rectangle | null;
    private tempDisplayObjectParent;
    constructor();
    abstract calculateBounds(): void;
    abstract removeChild(child: DisplayObject): void;
    abstract render(renderer: Renderer): void;
    /**
     * Set the parent Container of this DisplayObject.
     */
    setParent(container: Container): Container;
    updateTransform(): void;
    getLocalBounds(rect?: Rectangle): Rectangle;
    /**
     * Calculates and returns the (world) bounds of the display object as a {@link Rectangle}.
     */
    getBounds(skipUpdate?: boolean, rect?: Rectangle): Rectangle;
    destroy(): void;
    get _tempDisplayObjectParent(): TemporaryDisplayObject;
    enableTempParent(): Container | null;
    disableTempParent(cacheParent: Container): void;
    /**
     * The position of the displayObject on the x axis relative to the local coordinates of the parent.
     */
    get x(): number;
    set x(value: number);
    /**
     * The position of the displayObject on the y axis relative to the local coordinates of the parent.
     */
    get y(): number;
    set y(value: number);
    /**
     * The coordinate of the object relative to the local coordinates of the parent.
     *
     * @since PixiJS 4
     * @member {PIXI.ObservablePoint}
     */
    get position(): Point;
    set position(value: Point);
    get rotation(): number;
    set rotation(value: number);
    get scale(): Point;
    set scale(value: Point);
    get trackedPointers(): {
        [x: number]: InteractionTrackingData;
    };
    get worldTransform(): Matrix;
    get mask(): Container | null;
    set mask(value: Container | null);
}
export declare class TemporaryDisplayObject extends DisplayObject {
    calculateBounds(): null;
    removeChild(child: DisplayObject): null;
    render(renderer: Renderer): null;
}
export {};
