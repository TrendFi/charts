import { Resource } from "./resources/resource";
export type ImageSource = HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap;
export interface BaseTextureOptions {
    height: number;
    resolution: number;
    width: number;
}
/**
 * A Texture stores the information that represents an image.
 * All textures have a base texture, which contains information about the source.
 * Therefore you can have many textures all using a single BaseTexture
 */
export declare class BaseTexture<R extends Resource = Resource> {
    /** The width of the base texture set when the image has loaded. */
    width: number;
    /** The height of the base texture set when the image has loaded. */
    height: number;
    resolution: number;
    resource: R | null;
    constructor(resource?: R | ImageSource | string | any, options?: Partial<BaseTextureOptions>);
    getDrawableSource(): CanvasImageSource;
    setRealSize(realWidth: number, realHeight: number, resolution?: number): this;
    /**
     * Sets the resource if it wasn't set. Throws error if resource already present
     */
    setResource(resource: R): this;
}
