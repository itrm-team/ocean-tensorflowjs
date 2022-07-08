import { RandomGenerator } from "../../..";
import { Variation } from "../../variate/Variation";
import { HaeaOperators } from "./HaeaOperators";
import { SimpleHaeaOperatorsDescriptors } from "./SimpleHaeaOperatorsDescriptors";

export class SimpleHaeaOperators<T> extends HaeaOperators<T> {
    protected opers: Variation<T>[];

    constructor(opers: Variation<T>[], generator: RandomGenerator<number>) {
        super(generator, new SimpleHaeaOperatorsDescriptors<T>());
        this.opers = opers;
    }

    public get(indIndex: number, operIndex: number): Variation<T> {
        return this.opers[operIndex];
    }

    public numberOfOperatorsPerIndividual(): number {
        return this.opers.length;
    }

    public numberOfOperators(): number {
        return this.opers.length;
    }
}