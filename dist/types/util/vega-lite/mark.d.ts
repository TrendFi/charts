export declare const Mark: {
    readonly area: "area";
    readonly bar: "bar";
    readonly line: "line";
    readonly rule: "rule";
};
export type Mark = keyof typeof Mark;
export type Color = string;
interface BaseGradient {
    gradient: "linear";
}
interface GradientStop {
    offset: number;
    color: Color;
}
export type Gradient = LinearGradient;
export interface LinearGradient extends BaseGradient {
    gradient: "linear";
    stops: GradientStop[];
}
export interface MarkDef {
    type: string | Mark;
    orient?: "left" | "right";
    line?: {
        color: Color;
    };
    color?: Color | Gradient;
}
export {};
