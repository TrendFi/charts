/// <reference types="lodash" />
import { BigNumber } from "bignumber.js";
import { BigNumber as EthersBigNumber } from "ethers";
export declare function toDecimal(numberOfDecimals: number): number;
export declare function toBigNum(rawValue: string | number | EthersBigNumber, decimals: number): BigNumber;
export declare function addDecimal(value: string | number | EthersBigNumber, decimals: number, decimalPrecision?: number): string;
export declare function removeDecimal(value: string, decimals: number): string;
export declare const getNumberFormat: ((digits: number) => Intl.NumberFormat) & import("lodash").MemoizedFunction;
export declare const getFixedNumberFormat: ((digits: number) => Intl.NumberFormat) & import("lodash").MemoizedFunction;
export declare const getDecimalSeparator: (() => string | undefined) & import("lodash").MemoizedFunction;
/** formatNumber will format the number with fixed decimals
 * @param rawValue - should be a number that is not outside the safe range fail as in https://mikemcl.github.io/bignumber.js/#toN
 * @param formatDecimals - number of decimals to use
 */
export declare const formatNumber: (rawValue: string | number | BigNumber, formatDecimals?: number) => string;
/** formatNumberFixed will format the number with fixed decimals
 * @param rawValue - should be a number that is not outside the safe range fail as in https://mikemcl.github.io/bignumber.js/#toN
 * @param formatDecimals - number of decimals to use
 */
export declare const formatNumberFixed: (rawValue: string | number | BigNumber, formatDecimals?: number) => string;
export declare const addDecimalsFormatNumber: (rawValue: string | number, decimalPlaces: number, formatDecimals?: number) => string;
export declare const addDecimalsFixedFormatNumber: (rawValue: string | number, decimalPlaces: number, formatDecimals?: number) => string;
export declare const formatNumberPercentage: (value: BigNumber, decimals?: number) => string;
export declare const toNumberParts: (value: BigNumber | null | undefined, decimals?: number) => [integers: string, decimalPlaces: string];
export declare const useNumberParts: (value: BigNumber | null | undefined, decimals: number) => [integers: string, decimalPlaces: string];
export declare const isNumeric: (value?: string | number | BigNumber | bigint | null) => value is NonNullable<string | number>;
/**
 * Compacts given number to human readable format.
 * @param number
 * @param decimals Number of decimal places
 * @param compactDisplay Display mode; short -> 1e6 == 1M; ling -> 1e6 1 million
 * @param compactAbove Compact number above threshold
 * @param cap Use scientific notation above threshold
 */
export declare const compactNumber: (number: BigNumber, decimals?: number | "infer", compactDisplay?: "short" | "long", compactAbove?: number, cap?: BigNumber) => string | import("react/jsx-runtime").JSX.Element;
