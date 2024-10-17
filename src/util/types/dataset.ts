import { Candle } from "./candle";
import { Interval } from "./interval";
import { PriceMonitoringBounds } from "./price-monitoring-bounds";

export interface Configuration {
    decimalPlaces: number;
    supportedIntervals: Interval[];
    priceMonitoringBounds?: PriceMonitoringBounds[];
}

export interface Dataset {
    /**
     * Decimal places used for the market, sets the smallest price increment on the book.
     */
    readonly decimalPlaces: number;

    /**
     * Decimal places for order sizes, sets what size the smallest order / position on the market can be.
     */
    readonly positionDecimalPlaces: number;

    /**
     * Used by the charting library to get historical data.
     */
    query(interval: Interval, from: string, to: string): Promise<Candle[]>;
}
