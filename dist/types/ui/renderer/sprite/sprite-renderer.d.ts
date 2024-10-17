import { Renderer } from "../core";
import { Sprite } from "./sprite";
export declare class SpriteRenderer {
    protected renderer: Renderer;
    constructor(renderer: Renderer);
    render(sprite: Sprite): void;
}
