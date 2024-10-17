import "./indicator-info.css";
export type IndicatorInfoProps = {
    title?: string;
    info: {
        id: string;
        label?: string;
        value: string;
        intent?: "success" | "danger";
        color?: string;
        displayWhileNoTrading?: boolean;
    }[];
    noTrading?: boolean;
    closeable?: boolean;
    onClose?: () => void;
};
export declare const IndicatorInfo: ({ title, info, noTrading, closeable, onClose, }: IndicatorInfoProps) => import("react/jsx-runtime").JSX.Element;
