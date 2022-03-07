import { ActivationFunction } from "../../../math/functions/ActivationFunction";
import { Location } from "../../../utils/structures/Location";
import { Perceptron } from "../Perceptron";
import { Perceptron2D } from "./Perceptron2D";
export declare class Perceptron3D extends Perceptron<Perceptron2D, number[][][]> {
    constructor(weights: Perceptron2D[], beta: number, f: ActivationFunction);
    calculateWeightedInput(start: Location, input: number[][][]): number;
    width(): number;
    height(): number;
    length(): number;
}
