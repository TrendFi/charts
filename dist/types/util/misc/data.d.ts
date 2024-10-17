import { Candle } from "@util/types";
/**
 * Merges two arrays
 * @param a First array. Takes precedence
 * @param b Second array
 * @returns Merged array
 */
export declare function mergeData(a: readonly Candle[], b: readonly Candle[]): Candle[];
