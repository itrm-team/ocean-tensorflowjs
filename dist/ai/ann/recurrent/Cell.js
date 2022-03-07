"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
class Cell {
    constructor(F, I, C, O) {
        this.F = F;
        this.I = I;
        this.C = C;
        this.O = O;
    }
    propagate(input, output, previous) {
        let result = [];
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
    join(input, output) {
        let result = [];
        for (let i = 0; i < input.length; i++)
            result.push(input[i]);
        for (let i = 0; i < output.length; i++)
            result.push(output[i]);
        return result;
    }
}
exports.Cell = Cell;
//# sourceMappingURL=Cell.js.map