"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardDeviation = void 0;
const Average_1 = require("./Average");
const Function_1 = require("../Function");
class StandardDeviation extends Function_1.Function {
    apply(values) {
        return StandardDeviation.apply(values);
    }
    static apply(values) {
        let avg = Average_1.Average.apply(values), sum = 0;
        for (let value of values)
            sum += (value - avg) * (value - avg);
        return Math.sqrt(sum / (values.length - 1));
    }
}
exports.StandardDeviation = StandardDeviation;
//# sourceMappingURL=StandardDeviation.js.map