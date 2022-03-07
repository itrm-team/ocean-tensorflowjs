"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LSTM = void 0;
class LSTM {
    constructor(strap, outputSize) {
        this.outputSize = 0;
        this.strap = strap;
        this.outputSize = outputSize;
    }
    apply(input) {
        let result = { result: [], state: [] };
        for (let i = 0; i < this.outputSize; i++) {
            result.result.push(0);
            result.state.push(0);
        }
        for (let i = 0; i < this.strap.length; i++)
            result = this.strap[i].propagate(input[i], result.result, result.state);
        return result.result;
    }
    save(path) {
        throw new Error("Method not implemented.");
    }
}
exports.LSTM = LSTM;
//# sourceMappingURL=LSTM.js.map