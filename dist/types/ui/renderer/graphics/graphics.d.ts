import { CurveFactory, CurveFactoryLineOnly } from "d3-shape";
import { Renderer, Texture } from "../core";
import { Container } from "../display";
import { Matrix, Point, PointData, Polygon, Shape } from "../math";
import { GraphicsGeometry } from "./graphics-geometry";
import { FillStyle } from "./styles/fill-style";
import { LineStyle } from "./styles/line-style";
export interface FillStyleOptions {
    alpha?: number;
    color?: number;
    texture?: Texture;
    matrix?: Matrix;
}
export interface LineStyleOptions extends FillStyleOptions {
    lineDash?: number[];
    width?: number;
}
/**
 * The Graphics class is primarily used to render primitive shapes such as lines, circles and
 * rectangles to the display, and to color and fill them.
 */
export declare class Graphics extends Container {
    currentPath: Polygon | null;
    /** Current fill style. */
    protected _fillStyle: FillStyle;
    /** Current line style. */
    protected _lineStyle: LineStyle;
    /** Current shape matrix. */
    protected _matrix: Matrix | null;
    protected _tint: number;
    private _geometry;
    constructor(geometry?: GraphicsGeometry | null);
    /**
     * Draw any shape.
     */
    drawShape(shape: Shape): this;
    /**
     * Specifies a simple one-color fill that subsequent calls to other Graphics methods
     * (such as lineTo() or drawCircle()) use when drawing.
     */
    beginFill(color?: number, alpha?: number): this;
    /**
     * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
     */
    endFill(): this;
    /**
     * Begin the texture fill
     */
    beginTextureFill(options?: FillStyleOptions): this;
    /**
     * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo()
     * method or the drawCircle() method.
     */
    lineStyle(options?: LineStyleOptions | null): this;
    /**
     * Like line style but support texture for line fill.
     */
    lineTextureStyle(options: LineStyleOptions): this;
    /**
     * Draws an area, as in an area chart.
     * An area is defined by two bounding lines.
     */
    drawArea(data: [number, number, number][], curve?: CurveFactory): this;
    /**
     * Draws a circle.
     */
    drawCircle(x: number, y: number, radius: number): this;
    /**
     * Draws a line, as in a line chart.
     */
    drawLine(data: [number, number][], curve?: CurveFactory | CurveFactoryLineOnly): this;
    /**
     * Draws a rectangle shape.
     */
    drawRect(x: number, y: number, width: number, height: number): this;
    /**
     * Moves the current drawing position to x, y.
     */
    moveTo(x: number, y: number): this;
    /**
     * Draws a line using the current line style from the current drawing position to (x, y);
     * The current drawing position is then set to (x, y).
     */
    lineTo(x: number, y: number): this;
    /**
     * Closes the current path.
     */
    closePath(): this;
    /**
     * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
     */
    clear(): this;
    /**
     * Tests if a point is inside this graphics object.
     */
    containsPoint(point: PointData): boolean;
    protected _render(renderer: Renderer): void;
    /**
     * Start a polygon object internally.
     */
    protected startPoly(): void;
    /**
     * Finish the polygon object.
     */
    finishPoly(): void;
    get geometry(): GraphicsGeometry;
    get tint(): number;
    set tint(value: number);
    /**
     * Temporary point to use for containsPoint
     */
    static _TEMP_POINT: Point;
}
