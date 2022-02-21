"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.R2 = void 0;
const Function_1 = require("../Function");
class R2 extends Function_1.Function {
    apply(values) {
        return R2.apply(values.observed, values.predictions);
    }
    static apply(observed, predictions) {
        let avg = 0, ss_res = 0, ss_tot = 0;
        for (let i = 0; i < predictions.length; i++)
            avg += observed[i];
        avg /= predictions.length;
        for (let i = 0; i < predictions.length; i++) {
            ss_res += Math.pow(predictions[i] - predictions[i], 2);
            ss_tot += Math.pow(avg - predictions[i], 2);
        }
        return 1.0 - (ss_res / ss_tot);
    }
}
exports.R2 = R2;
//# sourceMappingURL=R2.js.map