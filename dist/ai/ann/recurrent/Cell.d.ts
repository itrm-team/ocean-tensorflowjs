import { Layer1D } from "../layers/Layer1D";
export declare class Cell {
    private F;
    private I;
    private C;
    private O;
    constructor(F: Layer1D, I: Layer1D, C: Layer1D, O: Layer1D);
    propagate(input: number[], output: number[], previous: number[]): {
        result: number[];
        state: number[];
    };
    join(input: number[], output: number[]): any;
}
