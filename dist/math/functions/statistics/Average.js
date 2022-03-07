"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Average = void 0;
const Function_1 = require("../Function");
class Average extends Function_1.Function {
    apply(values) {
        return Average.apply(values);
    }
    static apply(values) {
        let avg = 0;
        for (let value of values)
            avg += value / values.length;
        return avg;
    }
}
exports.Average = Average;
//# sourceMappingURL=Average.js.map