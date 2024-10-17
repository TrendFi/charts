import { DataSource } from "@util/types";
import { Interval } from "../api/vega-graphql";
export declare class EmptyDataSource implements DataSource {
    _decimalPlaces: number;
    _positionDecimalPlaces: number;
    get decimalPlaces(): number;
    get positionDecimalPlaces(): number;
    onReady(): Promise<{
        decimalPlaces: number;
        supportedIntervals: Interval[];
    }>;
    query(_interval: Interval, _from: string, _to: string): Promise<never[]>;
    subscribeData(_interval: Interval, _onSubscriptionData: (data: any) => void): void;
    unsubscribeData(): void;
}
