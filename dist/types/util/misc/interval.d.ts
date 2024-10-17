import { Interval } from "@util/types";
export type GQLInterval = keyof typeof Interval;
type IntervalUnit = "M" | "H" | "D";
type ParsedInterval = [number, IntervalUnit];
/** Parses an interval enum into a value and unit of time */
export declare function parseInterval(interval: Interval): ParsedInterval;
export declare const DEFAULT_CANDLES = 110;
export declare const CANDLE_BUFFER = 20;
export declare function getTimeFormat(interval: Interval): (() => string) | ((d: Date) => "HH:mm" | "MMM d");
export declare function getCandlesCount(interval: Interval, extents: [Date, Date]): number;
export declare function getSubMinutes(interval: Interval, visibleCandleCount: number): number;
export {};
