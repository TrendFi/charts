import { ImageSource } from "../base-texture";
import { Resource } from "./resource";
export declare class BaseImageResource extends Resource {
    source: ImageSource;
    constructor(source: ImageSource);
}
