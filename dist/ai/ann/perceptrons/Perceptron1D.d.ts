import { ActivationFunction } from "../../../math/functions/ActivationFunction";
import { Perceptron } from "../Perceptron";
import { Location } from "../../../utils/structures/Location";
export declare class Perceptron1D extends Perceptron<number, number[]> {
    constructor(weights: number[], beta: number, f: ActivationFunction);
    calculateWeightedInput(start: Location, input: number[]): number;
}
