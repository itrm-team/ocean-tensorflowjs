import { ActivationFunction } from "../../../math/functions/ActivationFunction";
import { Location } from "../../../utils/structures/Location";
import { Perceptron } from "../Perceptron";
import { Perceptron2D } from "./Perceptron2D";

export class Perceptron3D extends Perceptron<Perceptron2D, number[][][]> {
	constructor(weights: Perceptron2D[], beta: number, f: ActivationFunction) {
		super(weights, beta, f);
	}

	public calculateWeightedInput(start: Location, input: number[][][]) {
		let sum = 0.0;
		for (let i = 0; i < this.weights.length; i++)
			sum += this.weights[i].calculateWeightedInput(
				start,
				input[start.z + i]
			);
		return sum;
	}

	public width() {
		return this.weights[0].width();
	}

	public height() {
		return this.weights[0].height();
	}

	public length() {
		return this.size();
	}
}