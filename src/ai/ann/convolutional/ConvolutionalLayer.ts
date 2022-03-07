import { Dimension } from "../../../utils/structures/Dimension";
import { Location } from "../../../utils/structures/Location";
import { Layer } from "../Layer";
import { Perceptron2D } from "../perceptrons/Perceptron2D";

export class ConvolutionalLayer extends Layer<
	Perceptron2D[],
	number[][],
	number[][]
> {
	protected stride: Dimension;

	constructor(neurons: Perceptron2D[][], stride: Dimension) {
		super(neurons);
		this.stride = stride;
	}

	public propagate(input: any) {
		let result: any = [];
		for (
			let i = 0, y = 0;
			i < this.neurons.length;
			i++, y += this.stride.height
		) {
			result.push([]);
			for (
				let j = 0, x = 0;
				j < this.neurons[i].length;
				j++, x += this.stride.width
			)
				result[i][j] = this.neurons[i][j].propagateFromLocation(
					new Location(x, y, 0),
					input
				);
		}
		return result;
	}

	public weightedInput(input: number[][]): number[][] {
		let result: number[][] = [];
		for (
			let i = 0, y = 0;
			i < this.neurons.length;
			i++, y += this.stride.height
		) {
			result.push([]);
			for (
				let j = 0, x = 0;
				j < this.neurons.length;
				j++, x += this.stride.width
			)
				result[i][j] = this.neurons[i][j].calculateWeightedInput(
					new Location(x, y, 0),
					input
				);
		}
		return result;
	}

	public activate(weightedSum: any) {
		let result: any = [];
		for (let i = 0; i < this.neurons.length; i++) {
			result.push([]);
			for (let j = 0; j < this.neurons.length; j++)
				result[i][j] = this.neurons[i][j].activate(weightedSum[i][j]);
		}
		return result;
	}

	public width() {
		return this.neurons[0].length;
	}

	public height() {
		return this.neurons.length;
	}
}