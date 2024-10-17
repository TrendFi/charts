import "./chart-controls.css";
import { ChartType, Interval, Overlay, Study } from "@util/types";
export type ChartControlsProps = {
    interval: Interval;
    chartType: ChartType;
    overlays: Overlay[];
    studies: Study[];
    onSetInterval: (interval: Interval) => void;
    onSetChartType: (chartType: ChartType) => void;
    onSetOverlays: (overlay: Overlay[]) => void;
    onSetStudies: (study: Study[]) => void;
    onSnapshot: () => void;
};
export declare const ChartControls: ({ interval, chartType, overlays, studies, onSetInterval, onSetChartType, onSetOverlays, onSetStudies, onSnapshot, }: ChartControlsProps) => import("react/jsx-runtime").JSX.Element;
