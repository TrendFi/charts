import { Data } from "../data";
import { BaseSpec } from "../spec";
import { Transform } from "../transform";
import { DataComponent } from "./data";
export interface Component {
    data: DataComponent;
}
export declare class Model {
    readonly parent: Model | null;
    readonly data: Data | null;
    readonly transforms: Transform[];
    readonly component: Component;
    readonly children: Model[];
    constructor(spec: BaseSpec, parent: Model | null);
    parse(): void;
    parseData(): void;
}
