import { Matrix, Shape, SHAPES } from "../math";
import { FillStyle } from "./styles/fill-style";
import { LineStyle } from "./styles/line-style";
/**
 * A class to contain data useful for Graphics objects.
 */
export declare class GraphicsData {
    shape: Shape;
    lineStyle: LineStyle | null;
    fillStyle: FillStyle | null;
    matrix: Matrix | null;
    type: SHAPES;
    constructor(shape: Shape, fillStyle?: FillStyle | null, lineStyle?: LineStyle | null, matrix?: Matrix | null);
}
