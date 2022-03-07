import { RandomGenerator } from "../RandomGenerator";
import { SimpleRandomGenerator } from "../SimpleRandomGenerator";
export declare class Roulette extends SimpleRandomGenerator<number> {
    private generator;
    protected density: number[];
    constructor(density: number[], generator: RandomGenerator<number>);
    static buildStandardRoulette(size: number, generator: RandomGenerator<number>): Roulette;
    setDensity(density: number[]): void;
    next(): number;
}
