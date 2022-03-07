import { ActivationFunction } from "../../../math/functions/ActivationFunction";
import { Perceptron } from "../Perceptron";
import { Perceptron1D } from "./Perceptron1D";
import { Location } from "../../../utils/structures/Location";
export declare class Perceptron2D extends Perceptron<Perceptron1D, number[][]> {
    constructor(weights: Perceptron1D[], beta: number, f: ActivationFunction);
    calculateWeightedInput(start: Location, input: number[][]): number;
    width(): number;
    height(): number;
}
