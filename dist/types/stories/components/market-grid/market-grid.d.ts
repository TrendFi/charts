import "./market-grid.css";
import { MarketFieldsFragment } from "../../data-source/__generated__/markets";
export type MarketGridProps = {
    markets: MarketFieldsFragment[];
};
export declare const MarketGrid: ({ markets }: MarketGridProps) => import("react/jsx-runtime").JSX.Element;
