import { RandomGenerator } from "../RandomGenerator";
import { SimpleRandomGenerator } from "../SimpleRandomGenerator";

export class StandardPowerLawGenerator extends SimpleRandomGenerator<number> {
    private generator: RandomGenerator<number>;
    private coarseAlpha: number;

    constructor(alpha: number, generator: RandomGenerator<number>) {
        super();
        this.generator = generator;
        this.coarseAlpha = 1.0 / (1.0 - alpha);
    }

    public next(): number {
        return Math.pow(1.0 - this.generator.next(), this.coarseAlpha);
    }
}