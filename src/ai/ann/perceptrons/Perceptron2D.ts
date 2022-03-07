import { ActivationFunction } from "../../../math/functions/ActivationFunction";
import { Perceptron } from "../Perceptron";
import { Perceptron1D } from "./Perceptron1D";
import { Location } from "../../../utils/structures/Location";

export class Perceptron2D extends Perceptron<Perceptron1D, number[][]> {
	constructor(weights: Perceptron1D[], beta: number, f: ActivationFunction) {
		super(weights, beta, f);
	}

	public calculateWeightedInput(start: Location, input: number[][]) {
		let sum = 0.0;
		for (let i = 0; i < this.weights.length; i++) {
			sum += this.weights[i].calculateWeightedInput(
				start,
				input[start.y + i]
			);
		}
		return sum;
	}

	public width() {
		return this.weights[0].size();
	}

	public height() {
		return this.size();
	}
}