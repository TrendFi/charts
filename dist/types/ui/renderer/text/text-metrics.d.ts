import { TextStyle } from "./text-style";
interface IFontMetrics {
    ascent: number;
    descent: number;
    fontSize: number;
}
/**
 * The TextMetrics object represents the measurement of a block of text with a specified style.
 */
export declare class TextMetrics {
    text: string;
    style: TextStyle;
    width: number;
    height: number;
    lines: string[];
    lineWidths: number[];
    lineHeight: number;
    maxLineWidth: number;
    fontProperties: IFontMetrics;
    static METRICS_STRING: string;
    static BASELINE_SYMBOL: string;
    static BASELINE_MULTIPLIER: number;
    static HEIGHT_MULTIPLIER: number;
    static _canvas: HTMLCanvasElement | OffscreenCanvas;
    static _context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D;
    static _fonts: {
        [font: string]: IFontMetrics;
    };
    static _newlines: number[];
    static _breakingSpaces: number[];
    constructor(text: string, style: TextStyle, width: number, height: number, lines: string[], lineWidths: number[], lineHeight: number, maxLineWidth: number, fontProperties: IFontMetrics);
    /**
     * Measures the supplied string of text and returns a Rectangle.
     */
    static measureText(text: string, style: TextStyle, wordWrap?: boolean, canvas?: HTMLCanvasElement | OffscreenCanvas): TextMetrics;
    /**
     * Applies newlines to a string to have it optimally fit into the horizontal
     * bounds set by the Text object's wordWrapWidth property.
     */
    private static wordWrap;
    /**
     * Convienience function for logging each line added during the wordWrap
     * method
     *
     * @private
     * @param  {string}   line        - The line of text to add
     * @param  {boolean}  newLine     - Add new line character to end
     * @return {string}  A formatted line
     */
    private static addLine;
    /**
     * Gets & sets the widths of calculated characters in a cache object
     *
     * @private
     * @param  {string}                    key            - The key
     * @param  {number}                    letterSpacing  - The letter spacing
     * @param  {object}                    cache          - The cache
     * @param  {CanvasRenderingContext2D}  context        - The canvas context
     * @return {number}                    The from cache.
     */
    private static getFromCache;
    /**
     * Determines whether we should collapse breaking spaces
     *
     * @private
     * @param  {string}   whiteSpace - The TextStyle property whiteSpace
     * @return {boolean}  should collapse
     */
    private static collapseSpaces;
    /**
     * Determines whether we should collapse newLine chars
     *
     * @private
     * @param  {string}   whiteSpace - The white space
     * @return {boolean}  should collapse
     */
    private static collapseNewlines;
    /**
     * trims breaking whitespaces from string
     *
     * @private
     * @param  {string}  text - The text
     * @return {string}  trimmed string
     */
    private static trimRight;
    /**
     * Determines if char is a newline.
     *
     * @private
     * @param  {string}  char - The character
     * @return {boolean}  True if newline, False otherwise.
     */
    private static isNewline;
    /**
     * Determines if char is a breaking whitespace.
     *
     * It allows one to determine whether char should be a breaking whitespace
     * For example certain characters in CJK langs or numbers.
     * It must return a boolean.
     *
     * @param  {string}  char     - The character
     * @param  {string}  [nextChar] - The next character
     * @return {boolean}  True if whitespace, False otherwise.
     */
    static isBreakingSpace(char: string, _nextChar?: string): boolean;
    /**
     * Splits a string into words, breaking-spaces and newLine characters
     *
     * @private
     * @param  {string}  text - The text
     * @return {string[]}  A tokenized array
     */
    private static tokenize;
    /**
     * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
     *
     * It allows one to customise which words should break
     * Examples are if the token is CJK or numbers.
     * It must return a boolean.
     *
     * @param  {string}  token       - The token
     * @param  {boolean}  breakWords - The style attr break words
     * @return {boolean} whether to break word or not
     */
    static canBreakWords(_token: string, breakWords: boolean): boolean;
    /**
     * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
     *
     * It allows one to determine whether a pair of characters
     * should be broken by newlines
     * For example certain characters in CJK langs or numbers.
     * It must return a boolean.
     */
    static canBreakChars(_char: string, _nextChar: string, _token: string, _index: number, _breakWords: boolean): boolean;
    /**
     * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
     *
     * It is called when a token (usually a word) has to be split into separate pieces
     * in order to determine the point to break a word.
     * It must return an array of characters.
     *
     * @example
     * // Correctly splits emojis, eg "🤪🤪" will result in two element array, each with one emoji.
     * TextMetrics.wordWrapSplit = (token) => [...token];
     */
    static wordWrapSplit(token: string): string[];
    /**
     * Calculates the ascent, descent and fontSize of a given font-style
     */
    static measureFont(font: string): IFontMetrics;
    /**
     * Clear font metrics in metrics cache.
     */
    static clearMetrics(font?: string): void;
}
export {};
