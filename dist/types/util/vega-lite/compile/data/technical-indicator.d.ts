import { TechnicalIndicatorTransform } from "../../transform";
import { DataFlowNode } from "./dataflow";
export declare class TechnicalIndicatorTransformNode extends DataFlowNode {
    private transform;
    constructor(parent: DataFlowNode | null, transform: TechnicalIndicatorTransform);
    dependentFields(): Set<string>;
    producedFields(): Set<string>;
    assemble(): {
        type: string;
        method: "bollinger" | "envelope" | "exponentialMovingAverage" | "movingAverage" | "forceIndex" | "relativeStrengthIndex" | "eldarRay" | "macd" | "stochasticOscillator" | "volume";
        on: string[];
        as: string[];
    };
}
