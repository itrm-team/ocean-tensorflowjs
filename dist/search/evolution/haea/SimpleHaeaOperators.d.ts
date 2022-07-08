import { RandomGenerator } from "../../..";
import { Variation } from "../../variate/Variation";
import { HaeaOperators } from "./HaeaOperators";
export declare class SimpleHaeaOperators<T> extends HaeaOperators<T> {
    protected opers: Variation<T>[];
    constructor(opers: Variation<T>[], generator: RandomGenerator<number>);
    get(indIndex: number, operIndex: number): Variation<T>;
    numberOfOperatorsPerIndividual(): number;
    numberOfOperators(): number;
}
