import { Layer1D } from "../layers/Layer1D";

export class Cell {
	private F: Layer1D;
	private I: Layer1D;
	private C: Layer1D;
	private O: Layer1D;

	constructor(F: Layer1D, I: Layer1D, C: Layer1D, O: Layer1D) {
		this.F = F;
		this.I = I;
		this.C = C;
		this.O = O;
	}

	public propagate(input: number[], output: number[], previous: number[]) {
		let result: number[] = [];
		let data = this.join(input, output);
		let f_t = this.F.propagate(data);
		let i_t = this.I.propagate(data);
		let c_t = this.C.propagate(data);
		let o_t = this.O.propagate(data);
		let state = [];
		for (let i = 0; i < output.length; i++) {
			state.push(f_t[i] * previous[i] + i_t[i] * c_t[i]);
			result.push(o_t[i] * Math.tanh(state[i]));
		}
		return { result: result, state: state };
	}

	public join(input: number[], output: number[]) {
		let result: any = [];
		for (let i = 0; i < input.length; i++) result.push(input[i]);
		for (let i = 0; i < output.length; i++) result.push(output[i]);
		return result;
	}
}