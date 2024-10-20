import { Interval } from "@util/types";
export declare enum VegaInterval {
    /** 7 day interval */
    INTERVAL_I7D = "INTERVAL_I7D",
    /** 1 day interval */
    INTERVAL_I1D = "INTERVAL_I1D",
    /** 1 hour interval */
    INTERVAL_I1H = "INTERVAL_I1H",
    /** 1 minute interval */
    INTERVAL_I1M = "INTERVAL_I1M",
    /** 5 minute interval */
    INTERVAL_I5M = "INTERVAL_I5M",
    /** 4 hour interval */
    INTERVAL_I4H = "INTERVAL_I4H",
    /** 6 hour interval */
    INTERVAL_I6H = "INTERVAL_I6H",
    /** 8 hour interval */
    INTERVAL_I8H = "INTERVAL_I8H",
    /** 12 hour interval */
    INTERVAL_I12H = "INTERVAL_I12H",
    /** 15 minute interval (default) */
    INTERVAL_I15M = "INTERVAL_I15M",
    /** 30 minute interval */
    INTERVAL_I30M = "INTERVAL_I30M"
}
export declare const intervalMap: {
    [Property in keyof typeof Interval]: VegaInterval;
};
