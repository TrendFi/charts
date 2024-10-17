import { ZoomTransform } from "./transform";
export declare class Zoom {
    __zoom: ZoomTransform;
    /**
     * A constraint function which returns a transform given the current transform, viewport extent and translate extent.
     * The default implementation attempts to ensure that the viewport extent does not go outside the translate extent.
     */
    constrain: (transform: ZoomTransform, extent: [[number, number], [number, number]], translateExtent: [[number, number], [number, number]]) => ZoomTransform;
    /**
     * The scale extent is an array of numbers [k0, k1] where k0 is the minimum allowed scale factor and k1 is the maximum allowed scale factor,
     * and return this zoom behavior.
     *
     * The scale extent restricts zooming in and out. It is enforced on interaction and when using zoom.scaleBy, zoom.scaleTo and zoom.translateBy;
     * however, it is not enforced when using zoom.transform to set the transform explicitly.
     *
     * The default scale extent is [0, infinity].
     */
    scaleExtent: number[];
    /**
     * The translate extent is an array of points [[x0, y0], [x1, y1]], where [x0, y0] is the top-left corner of the world and [x1, y1]
     * is the bottom-right corner of the world, and return this zoom behavior.
     *
     * The translate extent restricts panning, and may cause translation on zoom out. It is enforced on interaction and when using zoom.scaleBy, zoom.scaleTo and zoom.translateBy;
     * however, it is not enforced when using zoom.transform to set the transform explicitly.
     *
     * The default scale extent is [[-infinity, infinity], [-infinity, infinity]].
     */
    translateExtent: [[number, number], [number, number]];
    /**
     * The viewport extent to the specified array of points [[x0, y0], [x1, y1]], where [x0, y0] is the top-left corner of the viewport
     * and [x1, y1] is the bottom-right corner of the viewport, and returns this zoom behavior.
     */
    extent: [[number, number], [number, number]];
    scaleBy(k: number, p: [number, number]): void;
    scaleTo(k: number, p: [number, number]): void;
    translateBy(x: number, y: number): void;
    translateTo(x: number, y: number, p: [number, number]): void;
    transform(transform: ZoomTransform): void;
    wheeled(wheelDelta: number, point: [number, number], viewportExtent: [[number, number], [number, number]]): void;
    scale(transform: ZoomTransform, k: number): ZoomTransform;
    translate(transform: ZoomTransform, p0: [number, number], p1: [number, number]): ZoomTransform;
}
