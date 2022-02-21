"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RMSE = void 0;
const Function_1 = require("../Function");
class RMSE extends Function_1.Function {
    apply(values) {
        return RMSE.apply(values.observed, values.predictions);
    }
    static apply(observed, predictions) {
        let sum = 0;
        for (let i = 0; i < predictions.length; i++) {
            let value = predictions[i] - observed[i];
            sum += value * value;
        }
        return Math.sqrt(sum / predictions.length);
    }
}
exports.RMSE = RMSE;
//# sourceMappingURL=RMSE.js.map