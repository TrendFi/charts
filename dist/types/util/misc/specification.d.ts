import { Candle, ChartType, Overlay, PriceMonitoringBounds, Study } from "@util/types";
import { BaseSpec } from "@util/vega-lite";
import { Colors } from "../../feature/candlestick-chart/helpers";
export declare function constructTopLevelSpec(data: Candle[], chartType: ChartType, colors: Colors, overlays?: Overlay[], studies?: Study[], priceMonitoringBounds?: PriceMonitoringBounds[]): import("../vega-lite/spec/toplevel").TopLevel<import("../vega-lite/spec/concat").GenericVConcatSpec<BaseSpec>>;
