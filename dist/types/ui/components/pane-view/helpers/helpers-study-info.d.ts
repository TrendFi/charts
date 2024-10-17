export declare function getStudyInfoFieldValue(data: any[], index: number | null, id: string): number;
export declare const studyInfoFields: Record<string, {
    label: string;
    fields: {
        id: string;
        label: string;
        format?: (d: any, decimalPlaces?: number) => string;
        intent?: boolean;
        /** Should still be displayed when no trading occurs */
        displayWhileNoTrading?: boolean;
    }[];
}>;
export declare function getIntent(field: {
    id: string;
    label: string;
    format?: ((d: any, decimalPlaces?: number | undefined) => string) | undefined;
    intent?: boolean | undefined;
}, value: number): "success" | "danger" | undefined;
