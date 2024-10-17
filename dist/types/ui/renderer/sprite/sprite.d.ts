import { Renderer, Texture } from "../core";
import { Container } from "../display";
import { Point } from "../math";
export declare class Sprite extends Container {
    _height: number;
    _texture: Texture;
    _width: number;
    protected _anchor: Point;
    private _roundPixels;
    constructor(texture?: Texture);
    protected _render(renderer: Renderer): void;
    get width(): number;
    set width(value: number);
    /**
     * The height of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */
    get height(): number;
    set height(value: number);
    get anchor(): Point;
    set anchor(value: Point);
    set roundPixels(value: boolean);
    get roundPixels(): boolean;
    get texture(): Texture;
    set texture(value: Texture);
}
