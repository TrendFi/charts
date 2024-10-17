import { LabelAnnotation } from "../..";
import { orders_orders, positions_party_positions } from "../api/vega-graphql";
export declare function createPositionLabelAnnotation(position: positions_party_positions, decimalPlaces: number): LabelAnnotation;
export declare function createOrderLabelAnnotation(order: orders_orders, decimalPlaces: number, onOrderCancelled: (id: string) => void): LabelAnnotation;
