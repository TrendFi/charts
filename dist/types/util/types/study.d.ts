export declare const Study: {
    readonly ELDAR_RAY: "eldarRay";
    readonly FORCE_INDEX: "forceIndex";
    readonly MACD: "macd";
    readonly RELATIVE_STRENGTH_INDEX: "relativeStrengthIndex";
    readonly VOLUME: "volume";
};
export type Study = (typeof Study)[keyof typeof Study];
export declare const studyLabels: Record<Study, string>;
