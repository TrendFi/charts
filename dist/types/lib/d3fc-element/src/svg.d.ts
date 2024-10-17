declare const _default: {
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
export default _default;
