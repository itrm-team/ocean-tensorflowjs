import { Roulette } from "../../../math/random/integer/Roulette";
import { RandomGenerator } from "../../../math/random/RandomGenerator";
import { Descriptors } from "../../Descriptors";
import { Variation } from "../../variate/Variation";

export abstract class HaeaOperators<T> {
    protected generator: RandomGenerator<number>;
    protected roulette: Roulette;
    protected rates: number[][] = [];
    protected sel_oper: number[] = [];
    protected size_offspring_sel_oper: number[] = [];
    public descriptors: Descriptors<HaeaOperators<T>>;

    constructor(generator: RandomGenerator<number>, descriptors: Descriptors<HaeaOperators<T>>) {
        this.roulette = new Roulette([], generator);
        this.generator = generator;
        this.descriptors = descriptors;
    }

    public abstract numberOfOperatorsPerIndividual(): number;
    public abstract numberOfOperators(): number;
    public abstract get(indIndex: number, operIndex: number): Variation<T>;

    protected choose(x: number[]): number {
        this.roulette.setDensity(x);
        return this.roulette.next();
    }

    public setSizeOffspring(indIndex: number, n: number): void {
        this.size_offspring_sel_oper[indIndex] = n;
    }

    public getSizeOffspring(indIndex: number): number {
        return this.size_offspring_sel_oper[indIndex];
    }

    public select(indIndex: number) {
        this.sel_oper[indIndex] = this.choose(this.rates[indIndex]);
        return this.sel_oper[indIndex];
    }
    
    public unselect(indIndex: number): void {
        this.sel_oper[indIndex] = -1;
    }

    public rewardOperator(individualRates: number[], operIndex: number): number[] {
        if (operIndex >= 0) {
            individualRates[operIndex] *= 1 + this.generator.next();
            return this.normalize(individualRates);
        }
        return individualRates;
    }

    public punishOperator(individualRates: number[], operIndex: number): number[] {
        if (operIndex >= 0) {
            individualRates[operIndex] *= 1 - this.generator.next();
            return this.normalize(individualRates);
        }
        return individualRates;
    }

    public normalize(rates: number[]): number[] {
        let sum: number = 0, result: number[] = [];
        for (let rate of rates)
            sum += rate;
        for (let rate of rates)
            result.push(rate / sum);
        return result;
    }

    public reward(indIndex: number): void {
        this.rates[indIndex] = this.rewardOperator(this.rates[indIndex], this.sel_oper[indIndex]);
    }

    public punish(indIndex: number): void {
        this.rates[indIndex] = this.punishOperator(this.rates[indIndex], this.sel_oper[indIndex]);
    }

    public restart(indIndex: number): void {
        let r: number[] = [], length = this.numberOfOperatorsPerIndividual();
        for (let i = 0; i < length; i++)
            r.push(1.0 / length);
        this.rates[indIndex] = r;
    }

    public resize(newSize: number) : void {
        while (this.rates.length < newSize) {
            let r: number[] = [], length = this.numberOfOperatorsPerIndividual();
            for (let i = 0; i < length; i++)
                r.push(1.0 / length);
            this.rates.push(r);
            this.sel_oper.push(-1);
            this.size_offspring_sel_oper.push(1);
        }
        if (this.rates.length > newSize)
            this.rates = this.rates.slice(0, newSize);
    }

    public getRates(indIndex: number): number[] {
        return this.rates[indIndex];
    }

    public getAllRates(): number[][] {
        return this.rates;
    }
}