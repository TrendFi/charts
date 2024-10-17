export interface InteractionTrackingFlags {
    OVER: number;
    LEFT_DOWN: number;
    RIGHT_DOWN: number;
    NONE: number;
}
export declare class InteractionTrackingData {
    static FLAGS: Readonly<InteractionTrackingFlags>;
    private readonly _pointerId;
    private _flags;
    constructor(pointerId: number);
    private _doSet;
    get pointerId(): number;
    get flags(): number;
    set flags(flags: number);
    get none(): boolean;
    get over(): boolean;
    set over(yn: boolean);
    get rightDown(): boolean;
    set rightDown(yn: boolean);
    /**
     * Did the left mouse button come down in the DisplayObject?
     *
     * @private
     * @member {boolean}
     */
    get leftDown(): boolean;
    set leftDown(yn: boolean);
}
