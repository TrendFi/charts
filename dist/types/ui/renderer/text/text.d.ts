import { Renderer } from "../core";
import { Sprite } from "../sprite";
import { ITextStyle, TextStyle } from "./text-style";
export declare class Text extends Sprite {
    static nextLineHeightBehavior: boolean;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    protected _resolution: number;
    protected _autoResolution: boolean;
    protected _style: TextStyle;
    protected _text: string;
    protected _font: string;
    constructor(text: string, style: Partial<ITextStyle> | TextStyle, canvas?: HTMLCanvasElement);
    updateText(): void;
    _render(renderer: Renderer): void;
    private _generateFillStyle;
    private drawLetterSpacing;
    private updateTexture;
    get height(): number;
    set height(value: number);
    get resolution(): number;
    set resolution(value: number);
    get style(): TextStyle;
    set style(style: Partial<TextStyle>);
    get text(): string;
    set text(text: string);
    get width(): number;
    set width(value: number);
}
