import { RandomGenerator } from "../RandomGenerator";
import { SimpleRandomGenerator } from "../SimpleRandomGenerator";

export class Roulette extends SimpleRandomGenerator<number> {
    private generator: RandomGenerator<number>;
    protected density: number[];

    constructor(density: number[], generator: RandomGenerator<number>) {
        super();
        this.generator = generator;
        this.density = density;
        this.setDensity(density);
    }

    public static buildStandardRoulette(size: number, generator: RandomGenerator<number>): Roulette {
        let density: number[] = [];
        for (let i = 0; i < size; i++)
            density.push(1.0 / size);
        return new Roulette(density, generator);
    }

    public setDensity(density: number[]): void {
        this.density = [];
        for (let value of density)
            density.push(density.length == 0 ? value : value + density[density.length - 1]);
    }

    public next(): number {
        let rnd: number = this.generator.next();
        for (let i = 0; i < this.density.length; i++)
            if (rnd < this.density[i])
                return i;
        return this.density.length - 1;
    }
}