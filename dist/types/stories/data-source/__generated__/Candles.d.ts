import * as Apollo from "@apollo/client";
import * as Types from "./types";
export type CandleFieldsFragment = {
    __typename?: "Candle";
    periodStart: any;
    lastUpdateInPeriod: any;
    high: string;
    low: string;
    open: string;
    close: string;
    volume: string;
};
export type CandlesQueryVariables = Types.Exact<{
    marketId: Types.Scalars["ID"];
    interval: Types.Interval;
    since: Types.Scalars["String"];
}>;
export type CandlesQuery = {
    __typename?: "Query";
    market?: {
        __typename?: "Market";
        id: string;
        decimalPlaces: number;
        positionDecimalPlaces: number;
        tradableInstrument: {
            __typename?: "TradableInstrument";
            instrument: {
                __typename?: "Instrument";
                id: string;
                name: string;
                code: string;
            };
        };
        candlesConnection?: {
            __typename?: "CandleDataConnection";
            edges?: Array<{
                __typename?: "CandleEdge";
                node: {
                    __typename?: "Candle";
                    periodStart: any;
                    lastUpdateInPeriod: any;
                    high: string;
                    low: string;
                    open: string;
                    close: string;
                    volume: string;
                };
            } | null> | null;
        } | null;
    } | null;
};
export type CandlesEventsSubscriptionVariables = Types.Exact<{
    marketId: Types.Scalars["ID"];
    interval: Types.Interval;
}>;
export type CandlesEventsSubscription = {
    __typename?: "Subscription";
    candles: {
        __typename?: "Candle";
        periodStart: any;
        lastUpdateInPeriod: any;
        high: string;
        low: string;
        open: string;
        close: string;
        volume: string;
    };
};
export declare const CandleFieldsFragmentDoc: Apollo.DocumentNode;
export declare const CandlesDocument: Apollo.DocumentNode;
/**
 * __useCandlesQuery__
 *
 * To run a query within a React component, call `useCandlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCandlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCandlesQuery({
 *   variables: {
 *      marketId: // value for 'marketId'
 *      interval: // value for 'interval'
 *      since: // value for 'since'
 *   },
 * });
 */
export declare function useCandlesQuery(baseOptions: Apollo.QueryHookOptions<CandlesQuery, CandlesQueryVariables>): Apollo.QueryResult<CandlesQuery, Types.Exact<{
    marketId: string;
    interval: Types.Interval;
    since: string;
}>>;
export declare function useCandlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CandlesQuery, CandlesQueryVariables>): Apollo.LazyQueryResultTuple<CandlesQuery, Types.Exact<{
    marketId: string;
    interval: Types.Interval;
    since: string;
}>>;
export type CandlesQueryHookResult = ReturnType<typeof useCandlesQuery>;
export type CandlesLazyQueryHookResult = ReturnType<typeof useCandlesLazyQuery>;
export type CandlesQueryResult = Apollo.QueryResult<CandlesQuery, CandlesQueryVariables>;
export declare const CandlesEventsDocument: Apollo.DocumentNode;
/**
 * __useCandlesEventsSubscription__
 *
 * To run a query within a React component, call `useCandlesEventsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCandlesEventsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCandlesEventsSubscription({
 *   variables: {
 *      marketId: // value for 'marketId'
 *      interval: // value for 'interval'
 *   },
 * });
 */
export declare function useCandlesEventsSubscription(baseOptions: Apollo.SubscriptionHookOptions<CandlesEventsSubscription, CandlesEventsSubscriptionVariables>): Apollo.SubscriptionResult<CandlesEventsSubscription, any>;
export type CandlesEventsSubscriptionHookResult = ReturnType<typeof useCandlesEventsSubscription>;
export type CandlesEventsSubscriptionResult = Apollo.SubscriptionResult<CandlesEventsSubscription>;
