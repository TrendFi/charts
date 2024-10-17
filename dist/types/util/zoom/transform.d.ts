export interface ZoomScale {
    domain(): number[] | Date[];
    domain(domain: Array<Date | number>): this;
    range(): number[];
    range(range: number[]): this;
    copy(): ZoomScale;
    invert(value: number): number | Date;
}
export declare class ZoomTransform {
    /**
     * The scale factor k.
     * This property should be considered read-only; instead of mutating a transform,
     * use transform.scale and transform.translate to derive a new transform.
     * Also see zoom.scaleBy, zoom.scaleTo and zoom.translateBy for convenience methods on the zoom behavior.
     */
    readonly k: number;
    /**
     * The translation amount tx along the x-axis.
     * This property should be considered read-only; instead of mutating a transform,
     * use transform.scale and transform.translate to derive a new transform.
     * Also see zoom.scaleBy, zoom.scaleTo and zoom.translateBy for convenience methods on the zoom behavior.
     */
    readonly x: number;
    /**
     * The translation amount ty along the y-axis
     * This property should be considered read-only; instead of mutating a transform,
     * use transform.scale and transform.translate to derive a new transform.
     * Also see zoom.scaleBy, zoom.scaleTo and zoom.translateBy for convenience methods on the zoom behavior.
     */
    readonly y: number;
    constructor(k: number, x: number, y: number);
    /**
     * Return a transform whose scale k1 is equal to k0 × k, where k0 is this transform’s scale.
     *
     * @param k A scale factor.
     */
    scale(k: number): ZoomTransform;
    translate(x: number, y: number): ZoomTransform;
    /**
     * Return the transformation of the specified point which is a two-element array of numbers [x, y].
     * The returned point is equal to [xk + tx, yk + ty].
     *
     * @param point Point coordinates [x, y]
     */
    apply(point: [number, number]): [number, number];
    /**
     * Return the transformation of the specified x-coordinate, xk + tx.
     *
     * @param x Value of x-coordinate.
     */
    applyX(x: number): number;
    /**
     * Return the transformation of the specified y-coordinate, yk + ty.
     *
     * @param y Value of y-coordinate.
     */
    applyY(y: number): number;
    /**
     * Return the inverse transformation of the specified point which is a two-element array of numbers [x, y].
     * The returned point is equal to [(x - tx) / k, (y - ty) / k].
     *
     * @param point Point coordinates [x, y]
     */
    invert(location: [number, number]): [number, number];
    /**
     * Return the inverse transformation of the specified x-coordinate, (x - tx) / k.
     *
     * @param x Value of x-coordinate.
     */
    invertX(x: number): number;
    /**
     * Return the inverse transformation of the specified y-coordinate, (y - ty) / k.
     *
     * @param y Value of y-coordinate.
     */
    invertY(y: number): number;
    /**
     * Returns a copy of the continuous scale x whose domain is transformed.
     * This is implemented by first applying the inverse x-transform on the scale’s range,
     * and then applying the inverse scale to compute the corresponding domain
     *
     * The scale x must use d3.interpolateNumber; do not use continuous.rangeRound as this
     * reduces the accuracy of continuous.invert and can lead to an inaccurate rescaled domain.
     * This method does not modify the input scale x; x thus represents the untransformed scale,
     * while the returned scale represents its transformed view.
     *
     * @param xScale A continuous scale for x-dimension.
     */
    rescaleX(x: ZoomScale): ZoomScale;
    /**
     * Returns a copy of the continuous scale y whose domain is transformed.
     * This is implemented by first applying the inverse y-transform on the scale’s range,
     * and then applying the inverse scale to compute the corresponding domain
     *
     * The scale y must use d3.interpolateNumber; do not use continuous.rangeRound as this
     * reduces the accuracy of continuous.invert and can lead to an inaccurate rescaled domain.
     * This method does not modify the input scale x; x thus represents the untransformed scale,
     * while the returned scale represents its transformed view.
     *
     * @param yScale A continuous scale for y-dimension.
     */
    rescaleY(y: ZoomScale): ZoomScale;
    toString(): string;
}
export declare const zoomIdentity: ZoomTransform;
