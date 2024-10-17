export declare const Interval: {
    readonly I1M: "I1M";
    readonly I5M: "I5M";
    readonly I15M: "I15M";
    readonly I30M: "I30M";
    readonly I1H: "I1H";
    readonly I4H: "I4H";
    readonly I6H: "I6H";
    readonly I8H: "I8H";
    readonly I12H: "I12H";
    readonly I1D: "I1D";
    readonly I7D: "I7D";
};
export type Interval = (typeof Interval)[keyof typeof Interval];
export declare const intervalLabels: Record<Interval, string>;
