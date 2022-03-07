import { AIModel } from "../../AIModel";
import { Cell } from "./Cell";
export declare class LSTM implements AIModel<number[][], number[]> {
    private strap;
    private outputSize;
    constructor(strap: Cell[], outputSize: number);
    apply(input: number[][]): number[];
    save(path: string): void;
}
