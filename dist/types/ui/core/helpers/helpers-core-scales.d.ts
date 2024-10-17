import { ScaleLinear, ScaleTime } from "@util/types";
import { Selection } from "d3-selection";
import { ZoomBehavior, ZoomTransform } from "d3-zoom";
import { Panes } from "../core";
import { PlotArea } from "../plot-area";
export declare function recalculateScale(xTransform: () => ZoomTransform, xScale: ScaleTime, yScales: Record<string, ScaleLinear>, id: string, plotAreas: {
    [id: string]: PlotArea;
}, yElements: Panes<Selection<Element, unknown, null, undefined>>, yZooms: Panes<ZoomBehavior<Element, unknown>>): void;
