/// <reference types="react" />
import "./non-ideal-state.css";
export type NonIdealStateProps = {
    delay?: number;
    description?: string;
    title: React.ReactNode;
};
export declare const NonIdealState: ({ delay, description, title, }: NonIdealStateProps) => import("react/jsx-runtime").JSX.Element;
