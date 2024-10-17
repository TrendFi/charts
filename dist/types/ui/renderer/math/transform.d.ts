import { Matrix } from "./matrix";
import { Point } from "./point";
export declare class Transform {
    localTransform: Matrix;
    pivot: Point;
    position: Point;
    scale: Point;
    skew: Point;
    worldTransform: Matrix;
    protected _rotation: number;
    protected _cx: number;
    protected _sx: number;
    protected _cy: number;
    protected _sy: number;
    constructor();
    updateLocalTransform(): void;
    updateTransform(parentTransform: Transform): void;
    setFromMatrix(matrix: Matrix): void;
    protected updateSkew(): void;
    get rotation(): number;
    set rotation(value: number);
}
