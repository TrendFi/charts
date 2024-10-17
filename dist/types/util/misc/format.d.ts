import { Interval } from "@util/types";
export declare function dateFormat(date: Date, interval: Interval): string;
export declare const formatter: (value: number, fractionDigits?: number) => string;
export declare function tickFormat(ticks: Date[], interval: Interval): string[];
/**
 * Creates a number formatter
 * @param decimalPlaces Number of decimal places to display
 */
export declare const numberFormatter: (decimalPlaces: number) => Intl.NumberFormat;
export declare function defaultPriceFormat(price: number): string;
export declare function defaultNumberFormat(price: number): string;
