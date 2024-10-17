export declare const ChartType: {
    readonly AREA: "area";
    readonly CANDLE: "candle";
    readonly LINE: "line";
    readonly OHLC: "ohlc";
};
export type ChartType = (typeof ChartType)[keyof typeof ChartType];
export declare const chartTypeLabels: Record<ChartType, string>;
