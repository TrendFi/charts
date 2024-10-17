import { Field } from "./channeldef";
export type Predicate = FieldEqualPredicate | FieldLTPredicate | FieldGTPredicate;
interface FieldPredicateBase {
    field: Field;
}
export interface FieldEqualPredicate extends FieldPredicateBase {
    equal: string | number;
}
export declare function isFieldEqualPredicate(predicate: any): predicate is FieldEqualPredicate;
interface FieldLTPredicate extends FieldPredicateBase {
    lt: string | number;
}
export declare function isFieldLTPredicate(predicate: any): predicate is FieldLTPredicate;
interface FieldGTPredicate extends FieldPredicateBase {
    gt: string | number;
}
export declare function isFieldGTPredicate(predicate: any): predicate is FieldGTPredicate;
export {};
