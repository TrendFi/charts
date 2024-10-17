export interface PointData {
    x: number;
    y: number;
}
export declare class Point {
    /** Position of the point on the x axis */
    x: number;
    /** Position of the point on the y axis */
    y: number;
    constructor(x?: number, y?: number);
    /** Creates a clone of this point
     */
    clone(): Point;
    /**
     * Copies `x` and `y` from the given point into this point
     */
    copyFrom(p: PointData): this;
    /**
     * Copies this point's x and y into the given point (`p`).
     */
    copyTo<T extends Point>(p: T): T;
    /**
     * Accepts another point (`p`) and returns `true` if the given point is equal to this point
     */
    equals(p: PointData): boolean;
    /**
     * Sets the point to a new `x` and `y` position.
     * If `y` is omitted, both `x` and `y` will be set to `x`. */
    set(x?: number, y?: number): this;
}
