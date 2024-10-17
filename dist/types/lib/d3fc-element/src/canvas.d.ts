declare const _default_base: {
    new (): {
        attributeChangedCallback(name: any): void;
        connectedCallback(): void;
        disconnectedCallback(): void;
        setMeasurements({ width, height }: {
            width: any;
            height: any;
        }): void;
        useDevicePixelRatio: any;
        requestRedraw(): void;
    };
    readonly observedAttributes: string[];
};
export default class _default extends _default_base {
    set setWebglViewport(arg: any);
    get setWebglViewport(): any;
}
export {};
