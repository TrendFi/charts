import { ScaleLinear, ScaleTime } from "@util/types";
import { Selection } from "d3-selection";
import { ZoomBehavior, ZoomTransform } from "d3-zoom";
import { Panes } from "../core";
import { PlotArea } from "../plot-area";
import { PlotAreaAnnotations } from "../plot-area-annotations";
import { PlotAreaInteraction } from "../plot-area-interaction";
import { XAxis } from "../x-axis";
import { YAxis } from "../y-axis";
export declare function handleXAxisDrag(xElement: Selection<Element, unknown, null, undefined>, xZoom: ZoomBehavior<Element, unknown>, e: any, xScale: ScaleTime, isPinned: boolean, xTransform: () => ZoomTransform, xAxis: XAxis, plotAreas: Panes<PlotArea>, yAxes: Panes<YAxis>, onBoundsChanged: (bounds: [Date, Date]) => void, onRedraw: () => void): void;
export declare function handleYAxisDrag(yElement: Selection<Element, any, null, undefined>, yZoom: ZoomBehavior<Element, unknown>, e: any, yScale: ScaleLinear, yTransform: () => ZoomTransform, plotArea: PlotArea, yAxis: YAxis, onFreePanChanged: (isFreePan: boolean) => void, onRedraw: () => void): void;
export declare function measureXAxis(event: {
    detail: {
        width: number;
        pixelRatio: number;
    };
}, xScale: ScaleTime, xZoom: ZoomBehavior<Element, unknown>, xTransform: () => ZoomTransform, xAxis: XAxis, yAxes: Panes<YAxis>, plotAreas: Panes<PlotArea>, dates: Date[], onBoundsChanged: (bounds: [Date, Date]) => void): void;
export declare function drawXAxis(event: any, xAxis: XAxis): void;
export declare function handleZoomend(plotAreas: Panes<PlotArea>, offset: [number, number], yScale: ScaleLinear, xAxis: XAxis, yAxis: YAxis, id: string, onRedraw: () => void): void;
export declare function handleZoomstart(plotAreas: Panes<PlotArea>, yAxes: Panes<YAxis>, xAxis: XAxis): void;
export declare function measureYAxis(event: any, scale: ScaleLinear, yTransform: () => ZoomTransform, plotArea: PlotArea, plotAreaInteraction: PlotAreaInteraction, plotAreaAnnotations: PlotAreaAnnotations, yAxis: YAxis, isFreePan: boolean, id: string, resetYAxis: (id: string) => void): void;
export declare function drawPlotAreaInteraction(event: any, plotAreaInteraction: PlotAreaInteraction): void;
export declare function drawPlotArea(event: any, plotArea: PlotArea): void;
export declare function drawYAxis(event: any, yAxis: YAxis): void;
export declare function handleMouseout(plotAreas: Panes<PlotArea>, xAxis: XAxis, yAxes: Panes<YAxis>, onMouseout: () => void, onRedraw: () => void): void;
export declare function handleMousemove(plotAreas: Panes<PlotArea>, offset: [number, number], yScale: ScaleLinear, yAxes: Panes<YAxis>, xAxis: XAxis, id: string, onMousemove: (index: number, id: string) => void, onRedraw: () => void): void;
export declare function handleZoom(xScale: ScaleTime, yScales: Panes<ScaleLinear>, xAxis: XAxis, yAxes: Panes<YAxis>, xElement: Selection<Element, unknown, null, undefined>, xZoom: ZoomBehavior<Element, unknown>, xTransform: () => ZoomTransform, yElements: Panes<Selection<Element, unknown, null, undefined>>, yTransforms: Panes<() => ZoomTransform>, yZooms: Panes<ZoomBehavior<Element, unknown>>, plotAreas: Panes<PlotArea>, isPinned: boolean, isFreePan: boolean, isSimple: boolean, dates: Date[], t: ZoomTransform, point: [number, number], id: string, onBoundsChanged: (bounds: [Date, Date]) => void, onRedraw: () => void, onFetchData: (from: Date, to: Date) => void, onIsPinnedChanged: (isPinned: boolean) => void): void;
