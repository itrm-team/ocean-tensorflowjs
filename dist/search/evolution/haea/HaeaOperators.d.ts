import { Roulette } from "../../../math/random/integer/Roulette";
import { RandomGenerator } from "../../../math/random/RandomGenerator";
import { Descriptors } from "../../Descriptors";
import { Variation } from "../../variate/Variation";
export declare abstract class HaeaOperators<T> {
    protected generator: RandomGenerator<number>;
    protected roulette: Roulette;
    protected rates: number[][];
    protected sel_oper: number[];
    protected size_offspring_sel_oper: number[];
    descriptors: Descriptors<HaeaOperators<T>>;
    constructor(generator: RandomGenerator<number>, descriptors: Descriptors<HaeaOperators<T>>);
    abstract numberOfOperatorsPerIndividual(): number;
    abstract numberOfOperators(): number;
    abstract get(indIndex: number, operIndex: number): Variation<T>;
    protected choose(x: number[]): number;
    setSizeOffspring(indIndex: number, n: number): void;
    getSizeOffspring(indIndex: number): number;
    select(indIndex: number): number;
    unselect(indIndex: number): void;
    rewardOperator(individualRates: number[], operIndex: number): number[];
    punishOperator(individualRates: number[], operIndex: number): number[];
    normalize(rates: number[]): number[];
    reward(indIndex: number): void;
    punish(indIndex: number): void;
    restart(indIndex: number): void;
    resize(newSize: number): void;
    getRates(indIndex: number): number[];
    getAllRates(): number[][];
}
