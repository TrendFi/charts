/// <reference types="react" />
import "./pane-view.css";
import { Bounds, Pane, PriceMonitoringBounds } from "@util/types";
import { Colors } from "../../../feature/candlestick-chart/helpers";
export type PaneViewProps = {
    bounds: Bounds | null;
    colors: Colors;
    dataIndex: number | null;
    decimalPlaces: number;
    positionDecimalPlaces: number;
    priceMonitoringBounds: PriceMonitoringBounds[];
    overlays: string[];
    pane: Pane;
    simple: boolean;
    onClosePane: (id: string) => void;
    onRemoveOverlay: (id: string) => void;
};
export declare const PaneView: import("react").ForwardRefExoticComponent<PaneViewProps & import("react").RefAttributes<HTMLDivElement>>;
