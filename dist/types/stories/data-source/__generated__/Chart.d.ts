import * as Apollo from "@apollo/client";
import * as Types from "./types";
export type ChartQueryVariables = Types.Exact<{
    marketId: Types.Scalars["ID"];
}>;
export type ChartQuery = {
    __typename?: "Query";
    market?: {
        __typename?: "Market";
        decimalPlaces: number;
        positionDecimalPlaces: number;
        data?: {
            __typename?: "MarketData";
            priceMonitoringBounds?: Array<{
                __typename?: "PriceMonitoringBounds";
                minValidPrice: string;
                maxValidPrice: string;
                referencePrice: string;
            }> | null;
        } | null;
    } | null;
};
export declare const ChartDocument: Apollo.DocumentNode;
/**
 * __useChartQuery__
 *
 * To run a query within a React component, call `useChartQuery` and pass it any options that fit your needs.
 * When your component renders, `useChartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChartQuery({
 *   variables: {
 *      marketId: // value for 'marketId'
 *   },
 * });
 */
export declare function useChartQuery(baseOptions: Apollo.QueryHookOptions<ChartQuery, ChartQueryVariables>): Apollo.QueryResult<ChartQuery, Types.Exact<{
    marketId: string;
}>>;
export declare function useChartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChartQuery, ChartQueryVariables>): Apollo.LazyQueryResultTuple<ChartQuery, Types.Exact<{
    marketId: string;
}>>;
export type ChartQueryHookResult = ReturnType<typeof useChartQuery>;
export type ChartLazyQueryHookResult = ReturnType<typeof useChartLazyQuery>;
export type ChartQueryResult = Apollo.QueryResult<ChartQuery, ChartQueryVariables>;
