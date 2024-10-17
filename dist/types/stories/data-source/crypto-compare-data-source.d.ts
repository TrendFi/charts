import { Candle, DataSource } from "@util/types";
import { Interval } from "../api/vega-graphql";
export declare class CryptoCompareDataSource implements DataSource {
    get decimalPlaces(): number;
    get positionDecimalPlaces(): number;
    onReady(): Promise<{
        decimalPlaces: number;
        supportedIntervals: Interval[];
    }>;
    query(interval: Interval, from: string, to: string): Promise<Candle[]>;
    subscribeData(_interval: Interval, onSubscriptionData: (datum: any) => void): void;
    unsubscribeData(): void;
}
