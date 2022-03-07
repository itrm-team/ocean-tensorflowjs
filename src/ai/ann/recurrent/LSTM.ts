import { AIModel } from "../../AIModel";
import { Cell } from "./Cell";

export class LSTM implements AIModel<number[][], number[]> {
	private strap: Cell[];
	private outputSize: number = 0;

	constructor(strap: Cell[], outputSize: number) {
		this.strap = strap;
		this.outputSize = outputSize;
	}

	apply(input: number[][]): number[] {
		let result: any = { result: [], state: [] };
		for (let i = 0; i < this.outputSize; i++) {
			result.result.push(0);
			result.state.push(0);
		}
		for (let i = 0; i < this.strap.length; i++)
			result = this.strap[i].propagate(
				input[i],
				result.result,
				result.state
			);
		return result.result;
	}

    save(path: string) {
        throw new Error("Method not implemented.");
    }
}