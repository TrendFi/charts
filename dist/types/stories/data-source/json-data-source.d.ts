import { Annotation, Configuration, DataSource } from "@util/types";
import { Interval } from "../api/vega-graphql";
export declare function extendCandle(candle: any, decimalPlaces: number, positionDecimalPlaces: number): any;
export declare class JsonDataSource implements DataSource {
    sub: any;
    marketId: string;
    _decimalPlaces: number;
    _positionDecimalPlaces: number;
    filename: string;
    annotations: boolean;
    get decimalPlaces(): number;
    get positionDecimalPlaces(): number;
    constructor(marketId: string, decimalPlaces: number, filename?: string, annotations?: boolean);
    onReady(): Promise<Configuration>;
    query(interval: Interval, _from: string, _to: string): Promise<any>;
    subscribeData(_interval: Interval, _onSubscriptionData: (datum: any) => void): void;
    unsubscribeData(): void;
    subscribeAnnotations(onSubscriptionAnnotation: (annotations: Annotation[]) => void): void;
    unsubscribeAnnotations(): void;
}
