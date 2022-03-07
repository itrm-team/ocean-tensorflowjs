import { ActivationFunction } from "../../../math/functions/ActivationFunction";
import { Perceptron } from "../Perceptron";
import { Location } from "../../../utils/structures/Location";

export class Perceptron1D extends Perceptron<number, number[]> {
	constructor(weights: number[], beta: number, f: ActivationFunction) {
		super(weights, beta, f);
	}

	public calculateWeightedInput(start: Location, input: number[]) {
		let sum = 0.0;
		for (let i = 0; i < this.weights.length; i++)
			sum += this.weights[i] * input[start.x + i];
		return sum;
	}
}