import { BaseTexture } from "../base-texture";
export declare abstract class Resource {
    protected _width: number;
    protected _height: number;
    constructor(width?: number, height?: number);
    bind(baseTexture: BaseTexture): void;
    unbind(baseTexture: BaseTexture): void;
    get width(): number;
    get height(): number;
}
