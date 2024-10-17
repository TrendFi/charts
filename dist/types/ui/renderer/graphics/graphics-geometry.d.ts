import { BatchGeometry } from "../core";
import { Matrix, PointData, Shape } from "../math";
import { GraphicsData } from "./graphics-data";
import { FillStyle } from "./styles/fill-style";
import { LineStyle } from "./styles/line-style";
/**
 * The Graphics class contains methods used to draw primitive shapes such as lines, circles and
 * rectangles to the display, and to color and fill them.
 */
export declare class GraphicsGeometry extends BatchGeometry {
    /** The collection of drawn shapes. */
    graphicsData: Array<GraphicsData>;
    /** An array of points to draw, 2 numbers per point */
    points: Array<number>;
    constructor();
    /**
     * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
     */
    clear(): GraphicsGeometry;
    /**
     * Draws the given shape to this Graphics object.
     */
    drawShape(shape: Shape, fillStyle?: FillStyle | null, lineStyle?: LineStyle | null, matrix?: Matrix | null): GraphicsGeometry;
    /**
     * Check to see if a point is contained within this geometry.
     */
    containsPoint(point: PointData): boolean;
}
