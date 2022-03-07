import { Layer } from "../Layer";
import { Perceptron1D } from "../perceptrons/Perceptron1D";

export class Layer1D extends Layer<Perceptron1D, number[], number[]> {
	constructor(neurons: Perceptron1D[]) {
		super(neurons);
	}

	public propagate(input: number[]) {
		let result: number[] = [];
		for (let i = 0; i < this.neurons.length; i++)
			result.push(this.neurons[i].propagate(input));
		return result;
	}

	public weightedInput(input: number[]) {
		let result: number[] = [];
		for (let i = 0; i < this.neurons.length; i++)
			result.push(this.neurons[i].weightedInput(input));
		return result;
	}

	public activate(weightedSum: number[]) {
		let result: number[] = [];
		for (let i = 0; i < this.neurons.length; i++)
			result.push(this.neurons[i].activate(weightedSum[i]));
		return result;
	}
}