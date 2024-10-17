/**
 * The five basic intents.
 */
export declare const Intent: {
    readonly NONE: "none";
    readonly PRIMARY: "primary";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
    readonly DANGER: "danger";
};
export type Intent = (typeof Intent)[keyof typeof Intent];
