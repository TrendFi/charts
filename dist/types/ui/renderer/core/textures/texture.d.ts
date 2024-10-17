import { Point, PointData, Rectangle } from "../../math";
import { BaseTexture, BaseTextureOptions, ImageSource } from "./base-texture";
import { Resource } from "./resources/resource";
export type TextureSource = string | BaseTexture | ImageSource;
/**
 * A texture stores the information that represents an image or part of an image.
 */
export declare class Texture<R extends Resource = Resource> {
    /** The base texture that this texture uses. */
    baseTexture: BaseTexture;
    /** This is the area of original texture. */
    orig: Rectangle;
    /** This is the area of the BaseTexture image to actually copy to the canvas when rendering, */
    _frame: Rectangle;
    defaultAnchor: Point;
    constructor(baseTexture: BaseTexture<R>, frame?: Rectangle, orig?: Rectangle, anchor?: PointData);
    onBaseTextureUpdated(baseTexture: BaseTexture): void;
    get frame(): Rectangle;
    set frame(frame: Rectangle);
    /**
     * Returns resolution of baseTexture
     */
    get resolution(): number;
    static from<R extends Resource = Resource>(source: TextureSource, options?: Partial<BaseTextureOptions>): Texture<R>;
    static readonly EMPTY: Texture;
    static readonly WHITE: Texture;
}
