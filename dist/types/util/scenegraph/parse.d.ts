import { Annotation, Scenegraph } from "@util/types";
import { BaseSpec, Data, Encoding, Field, TopLevelSpec } from "@util/vega-lite";
import { Dimensions } from "../../feature/candlestick-chart/hooks";
export declare function parseLayer(layer: BaseSpec, data: Data, encoding: Encoding<Field>, candleWidth: number, dimensions: Dimensions, pixelsToTime: number): any[];
/**
 * Parse top-level view specification into a scenegraph model
 * @param specification
 * @param candleWidth
 * @param decimalPlaces
 */
export declare function parse(specification: TopLevelSpec, candleWidth: number, dimensions: Dimensions, pixelsToTime: number, decimalPlaces: number, annotations: Annotation[]): Scenegraph | null;
