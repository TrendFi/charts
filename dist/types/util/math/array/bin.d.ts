export default function _default(): {
    (data: any): any[];
    value(_: any, ...args: any[]): typeof identity;
    domain(_: any, ...args: any[]): typeof extent;
    thresholds(_: any, ...args: any[]): typeof sturges | any;
};
import identity from "./identity.js";
import extent from "./extent.js";
import sturges from "./threshold/sturges.js";
