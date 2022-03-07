import { ActivationFunction } from "../../math/functions/ActivationFunction";
import { Location } from "../../utils/structures/Location";
export declare abstract class Perceptron<W, I> {
    protected weights: W[];
    protected beta: number;
    function: ActivationFunction;
    constructor(weights: W[], beta: number, f: ActivationFunction);
    weightedInput(input: any): number;
    abstract calculateWeightedInput(start: Location, input: I): number;
    propagate(input: any): number;
    activate(weightedSum: number): number;
    propagateFromLocation(start: Location, input: I): number;
    size(): number;
}
