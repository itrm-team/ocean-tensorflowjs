import { Exponential } from "../../../math/functions/activation/Exponential";
import { Layer } from "../Layer";
import { Perceptron1D } from "../perceptrons/Perceptron1D";

export class SoftmaxLayer extends Layer<Perceptron1D, number[], number[]> {
	constructor(neurons: Perceptron1D[]) {
		let activationFunction = new Exponential();
		for (let i = 0; i < neurons.length; i++)
			neurons[i].function = activationFunction;
		super(neurons);
	}

	public propagate(input: number[]) {
		let result: number[] = [],
			sum = 0.0;
		for (let i = 0; i < this.neurons.length; i++) {
			let value = this.neurons[i].propagate(input);
			result.push(value);
			sum += value;
		}
		for (let i = 0; i < result.length; i++) result[i] /= sum;
		return result;
	}

	public weightedInput(input: number[]) {
		let result: number[] = [];
		for (let i = 0; i < this.neurons.length; i++)
			result.push(this.neurons[i].weightedInput(input));
		return result;
	}

	public activate(weightedSum: number[]) {
		let result = [],
			sum = 0.0;
		for (let i = 0; i < this.neurons.length; i++) {
			let value = this.neurons[i].propagate(weightedSum[i]);
			result.push(value);
			sum += value;
		}
		for (let i = 0; i < result.length; i++) result[i] /= sum;
		return result;
	}
}
