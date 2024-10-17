import type { ApolloClient } from "@apollo/client";
import { Candle, DataSource, Interval as PennantInterval, PriceMonitoringBounds } from "@util/types";
import type { Subscription } from "zen-observable-ts";
/** The interval for trade candles when subscribing via Vega GraphQL, default is I15M */
export declare enum Interval {
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
/**
 * A data access object that provides access to the Vega GraphQL API.
 */
export declare class VegaDataSource implements DataSource {
    client: ApolloClient<object>;
    marketId: string;
    partyId: null | string;
    _decimalPlaces: number;
    _positionDecimalPlaces: number;
    candlesSub: Subscription | null;
    /**
     * Indicates the number of decimal places that an integer must be shifted by in order to get a correct
     * number denominated in the currency of the Market.
     */
    get decimalPlaces(): number;
    /**
     * Indicates the number of position decimal places that an integer must be shifted by in order to get a correct
     * number denominated in the unit size of the Market.
     */
    get positionDecimalPlaces(): number;
    /**
     *
     * @param client - An ApolloClient instance.
     * @param marketId - Market identifier.
     * @param partyId - Party identifier.
     */
    constructor(client: ApolloClient<object>, marketId: string, partyId?: null | string);
    /**
     * Used by the charting library to initialize itself.
     */
    onReady(): Promise<{
        decimalPlaces: number;
        supportedIntervals: ("I1M" | "I5M" | "I15M" | "I1H" | "I6H" | "I1D")[];
    } | {
        decimalPlaces: number;
        positionDecimalPlaces: number;
        supportedIntervals: ("I1M" | "I5M" | "I15M" | "I1H" | "I6H" | "I1D")[];
        priceMonitoringBounds: PriceMonitoringBounds[] | undefined;
    }>;
    /**
     * Used by the charting library to get historical data.
     */
    query(interval: PennantInterval, from: string): Promise<Candle[]>;
    /**
     * Used by the charting library to create a subscription to streaming data.
     */
    subscribeData(interval: PennantInterval, onSubscriptionData: (data: Candle) => void): void;
    /**
     * Used by the charting library to clean-up a subscription to streaming data.
     */
    unsubscribeData(): void;
}
