import { Container } from "../display";
import { Graphics } from "../graphics";
import { Renderer } from "./renderer";
export declare class CanvasMaskSystem {
    private renderer;
    private _foundShapes;
    constructor(renderer: Renderer);
    /**
     * This method adds it to the current stack of masks.
     * @param maskData - the maskData that will be pushed
     */
    pushMask(maskData: Graphics): void;
    recursiveFindShapes(container: Container, out: Graphics[]): void;
    renderGraphicsShape(graphics: Graphics): void;
    popMask(renderer: Renderer): void;
}
