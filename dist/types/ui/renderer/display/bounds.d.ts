import { Matrix, PointData, Rectangle, Transform } from "../math";
export declare class Bounds {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    rect: Rectangle | null;
    updateID: number;
    constructor();
    /**
     * Checks if bounds are empty.
     */
    isEmpty(): boolean;
    /**
     * Clears the bounds and resets.
     */
    clear(): void;
    getRectangle(rect?: Rectangle): Rectangle;
    addPoint(point: PointData): void;
    /**
     * Adds a point, after transformed. This should be inlined when its possible.
     */
    addPointMatrix(matrix: Matrix, point: PointData): void;
    /**
     * Adds a quad, not transformed
     */
    addQuad(vertices: Float32Array): void;
    addFrame(transform: Transform, x0: number, y0: number, x1: number, y1: number): void;
    addFrameMatrix(matrix: Matrix, x0: number, y0: number, x1: number, y1: number): void;
    /**
     * Adds screen vertices from array.
     */
    addVertexData(vertexData: Float32Array, beginOffset: number, endOffset: number): void;
    addVertices(transform: Transform, vertices: Float32Array, beginOffset: number, endOffset: number): void;
    addVerticesMatrix(matrix: Matrix, vertices: Float32Array, beginOffset: number, endOffset: number, padX?: number, padY?: number): void;
    addBounds(bounds: Bounds): void;
    addBoundsMask(bounds: Bounds, mask: Bounds): void;
    addBoundsMatrix(bounds: Bounds, matrix: Matrix): void;
    addBoundsArea(bounds: Bounds, area: Rectangle): void;
    /**
     * Pads bounds object, making it grow in all directions.
     * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
     */
    pad(paddingX?: number, paddingY?: number): void;
    /**
     * Adds padded frame. (x0, y0) should be strictly less than (x1, y1)
     */
    addFramePad(x0: number, y0: number, x1: number, y1: number, padX: number, padY: number): void;
}
