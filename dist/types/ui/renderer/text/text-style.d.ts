import { TEXT_GRADIENT } from "./const";
export type TextStyleAlign = "left" | "center" | "right" | "justify";
export type TextStyleFill = string | string[] | number | number[] | CanvasGradient | CanvasPattern;
export type TextStyleFontStyle = "normal" | "italic" | "oblique";
export type TextStyleFontVariant = "normal" | "small-caps";
export type TextStyleFontWeight = "normal" | "bold" | "bolder" | "lighter" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
export type TextStyleLineJoin = "miter" | "round" | "bevel";
export type TextStyleTextBaseline = "alphabetic" | "top" | "hanging" | "middle" | "ideographic" | "bottom";
export type TextStyleWhiteSpace = "normal" | "pre" | "pre-line";
export interface ITextStyle {
    align: TextStyleAlign;
    breakWords: boolean;
    dropShadow: boolean;
    dropShadowAlpha: number;
    dropShadowAngle: number;
    dropShadowBlur: number;
    dropShadowColor: string | number;
    dropShadowDistance: number;
    fill: TextStyleFill;
    fillGradientType: TEXT_GRADIENT;
    fillGradientStops: number[];
    fontFamily: string | string[];
    fontSize: number | string;
    fontStyle: TextStyleFontStyle;
    fontVariant: TextStyleFontVariant;
    fontWeight: TextStyleFontWeight;
    letterSpacing: number;
    lineHeight: number;
    lineJoin: TextStyleLineJoin;
    miterLimit: number;
    padding: number;
    stroke: string | number;
    strokeThickness: number;
    textBaseline: TextStyleTextBaseline;
    trim: boolean;
    whiteSpace: TextStyleWhiteSpace;
    wordWrap: boolean;
    wordWrapWidth: number;
    leading: number;
}
/**
 * A TextStyle Object contains information to decorate a Text objects.
 *
 * An instance can be shared between multiple Text objects; then changing the style will update all text objects using it.
 */
export declare class TextStyle implements ITextStyle {
    styleID: number;
    protected _align: TextStyleAlign;
    protected _breakWords: boolean;
    protected _dropShadow: boolean;
    protected _dropShadowAlpha: number;
    protected _dropShadowAngle: number;
    protected _dropShadowBlur: number;
    protected _dropShadowColor: string | number;
    protected _dropShadowDistance: number;
    protected _fill: TextStyleFill;
    protected _fillGradientType: TEXT_GRADIENT;
    protected _fillGradientStops: number[];
    protected _fontFamily: string | string[];
    protected _fontSize: number | string;
    protected _fontStyle: TextStyleFontStyle;
    protected _fontVariant: TextStyleFontVariant;
    protected _fontWeight: TextStyleFontWeight;
    protected _letterSpacing: number;
    protected _lineHeight: number;
    protected _lineJoin: TextStyleLineJoin;
    protected _miterLimit: number;
    protected _padding: number;
    protected _stroke: string | number;
    protected _strokeThickness: number;
    protected _textBaseline: TextStyleTextBaseline;
    protected _trim: boolean;
    protected _whiteSpace: TextStyleWhiteSpace;
    protected _wordWrap: boolean;
    protected _wordWrapWidth: number;
    protected _leading: number;
    constructor(style?: Partial<ITextStyle>);
    /**
     * Creates a new TextStyle object with the same values as this one.
     * Note that the only the properties of the object are cloned.
     */
    clone(): TextStyle;
    /**
     * Resets all properties to the defaults specified in TextStyle.prototype._default
     */
    reset(): void;
    /**
     * Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
     *
     * @member {string}
     */
    get align(): TextStyleAlign;
    set align(align: TextStyleAlign);
    /**
     * Indicates if lines can be wrapped within words, it needs wordWrap to be set to true
     *
     * @member {boolean}
     */
    get breakWords(): boolean;
    set breakWords(breakWords: boolean);
    /**
     * Set a drop shadow for the text
     *
     * @member {boolean}
     */
    get dropShadow(): boolean;
    set dropShadow(dropShadow: boolean);
    /**
     * Set alpha for the drop shadow
     *
     * @member {number}
     */
    get dropShadowAlpha(): number;
    set dropShadowAlpha(dropShadowAlpha: number);
    /**
     * Set a angle of the drop shadow
     *
     * @member {number}
     */
    get dropShadowAngle(): number;
    set dropShadowAngle(dropShadowAngle: number);
    /**
     * Set a shadow blur radius
     *
     * @member {number}
     */
    get dropShadowBlur(): number;
    set dropShadowBlur(dropShadowBlur: number);
    /**
     * A fill style to be used on the dropshadow e.g 'red', '#00FF00'
     *
     * @member {string|number}
     */
    get dropShadowColor(): number | string;
    set dropShadowColor(dropShadowColor: number | string);
    /**
     * Set a distance of the drop shadow
     *
     * @member {number}
     */
    get dropShadowDistance(): number;
    set dropShadowDistance(dropShadowDistance: number);
    /**
     * A canvas fillstyle that will be used on the text e.g 'red', '#00FF00'.
     * Can be an array to create a gradient eg ['#000000','#FFFFFF']
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle|MDN}
     *
     * @member {string|string[]|number|number[]|CanvasGradient|CanvasPattern}
     */
    get fill(): TextStyleFill;
    set fill(fill: TextStyleFill);
    /**
     * If fill is an array of colours to create a gradient, this can change the type/direction of the gradient.
     */
    get fillGradientType(): TEXT_GRADIENT;
    set fillGradientType(fillGradientType: TEXT_GRADIENT);
    /**
     * If fill is an array of colours to create a gradient, this array can set the stop points
     * (numbers between 0 and 1) for the color, overriding the default behaviour of evenly spacing them.
     *
     * @member {number[]}
     */
    get fillGradientStops(): number[];
    set fillGradientStops(fillGradientStops: number[]);
    /**
     * The font family
     *
     * @member {string|string[]}
     */
    get fontFamily(): string | string[];
    set fontFamily(fontFamily: string | string[]);
    /**
     * The font size
     * (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em')
     *
     * @member {number|string}
     */
    get fontSize(): number | string;
    set fontSize(fontSize: number | string);
    /**
     * The font style
     * ('normal', 'italic' or 'oblique')
     *
     * @member {string}
     */
    get fontStyle(): TextStyleFontStyle;
    set fontStyle(fontStyle: TextStyleFontStyle);
    /**
     * The font variant
     * ('normal' or 'small-caps')
     *
     * @member {string}
     */
    get fontVariant(): TextStyleFontVariant;
    set fontVariant(fontVariant: TextStyleFontVariant);
    /**
     * The font weight
     * ('normal', 'bold', 'bolder', 'lighter' and '100', '200', '300', '400', '500', '600', '700', 800' or '900')
     *
     * @member {string}
     */
    get fontWeight(): TextStyleFontWeight;
    set fontWeight(fontWeight: TextStyleFontWeight);
    /**
     * The amount of spacing between letters, default is 0
     *
     * @member {number}
     */
    get letterSpacing(): number;
    set letterSpacing(letterSpacing: number);
    /**
     * The line height, a number that represents the vertical space that a letter uses
     *
     * @member {number}
     */
    get lineHeight(): number;
    set lineHeight(lineHeight: number);
    /**
     * The space between lines
     *
     * @member {number}
     */
    get leading(): number;
    set leading(leading: number);
    /**
     * The lineJoin property sets the type of corner created, it can resolve spiked text issues.
     * Default is 'miter' (creates a sharp corner).
     *
     * @member {string}
     */
    get lineJoin(): TextStyleLineJoin;
    set lineJoin(lineJoin: TextStyleLineJoin);
    /**
     * The miter limit to use when using the 'miter' lineJoin mode
     * This can reduce or increase the spikiness of rendered text.
     *
     * @member {number}
     */
    get miterLimit(): number;
    set miterLimit(miterLimit: number);
    /**
     * Occasionally some fonts are cropped. Adding some padding will prevent this from happening
     * by adding padding to all sides of the text.
     *
     * @member {number}
     */
    get padding(): number;
    set padding(padding: number);
    /**
     * A canvas fillstyle that will be used on the text stroke
     * e.g 'blue', '#FCFF00'
     *
     */
    get stroke(): string | number;
    set stroke(stroke: string | number);
    /**
     * A number that represents the thickness of the stroke.
     * Default is 0 (no stroke)
     *
     * @member {number}
     */
    get strokeThickness(): number;
    set strokeThickness(strokeThickness: number);
    /**
     * The baseline of the text that is rendered.
     *
     * @member {string}
     */
    get textBaseline(): TextStyleTextBaseline;
    set textBaseline(textBaseline: TextStyleTextBaseline);
    get trim(): boolean;
    set trim(trim: boolean);
    get whiteSpace(): TextStyleWhiteSpace;
    set whiteSpace(whiteSpace: TextStyleWhiteSpace);
    get wordWrap(): boolean;
    set wordWrap(wordWrap: boolean);
    get wordWrapWidth(): number;
    set wordWrapWidth(wordWrapWidth: number);
    toFontString(): string;
}
