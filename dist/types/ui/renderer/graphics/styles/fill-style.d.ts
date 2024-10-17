import { Texture } from "../..";
export declare class FillStyle {
    alpha: number;
    color: number;
    texture: Texture<import("../../core/textures/resources/resource").Resource>;
    visible: boolean;
    clone(): FillStyle;
    reset(): void;
}
