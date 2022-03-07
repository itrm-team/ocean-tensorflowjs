import { RandomGenerator } from "../RandomGenerator";
import { SimpleRandomGenerator } from "../SimpleRandomGenerator";
export declare class StandardPowerLawGenerator extends SimpleRandomGenerator<number> {
    private generator;
    private coarseAlpha;
    constructor(alpha: number, generator: RandomGenerator<number>);
    next(): number;
}
