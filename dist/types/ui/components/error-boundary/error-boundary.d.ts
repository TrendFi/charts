import * as React from "react";
interface Props {
    children: React.ReactNode;
}
interface State {
    hasError: boolean;
}
export declare class ErrorBoundary extends React.Component<Props, State> {
    state: State;
    constructor(props: Props);
    static getDerivedStateFromError(_: Error): State;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    render(): string | number | boolean | import("react/jsx-runtime").JSX.Element | Iterable<React.ReactNode> | null | undefined;
}
export {};
