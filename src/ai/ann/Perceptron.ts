import { ActivationFunction } from "../../math/functions/ActivationFunction";
import { Location } from "../../utils/structures/Location";

export abstract class Perceptron<W, I> {
	protected weights: W[] = [];
	protected beta = 0.0;
	public function: ActivationFunction;

	constructor(weights: W[], beta: number, f: ActivationFunction) {
		this.weights = weights;
		this.beta = beta;
		this.function = f;
	}

	public weightedInput(input: any) {
		return this.calculateWeightedInput(new Location(0, 0, 0), input);
	}

	public abstract calculateWeightedInput(start: Location, input: I): number;

	public propagate(input: any) {
		return this.activate(this.weightedInput(input));
	}

	public activate(weightedSum: number) {
		return this.function.activate(weightedSum + this.beta);
	}

	public propagateFromLocation(start: Location, input: I) {
		return this.activate(this.calculateWeightedInput(start, input));
	}

	public size() {
		return this.weights.length;
	}
}