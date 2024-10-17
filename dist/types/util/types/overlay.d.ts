export declare const Overlay: {
    readonly BOLLINGER: "bollinger";
    readonly ENVELOPE: "envelope";
    readonly EXPONENTIAL_MOVING_AVERAGE: "exponentialMovingAverage";
    readonly MOVING_AVERAGE: "movingAverage";
    readonly PRICE_MONITORING_BOUNDS: "priceMonitoringBounds";
};
export type Overlay = (typeof Overlay)[keyof typeof Overlay];
export declare const overlayLabels: Record<Overlay, string>;
