"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PearsonCorrelation = void 0;
const Function_1 = require("../Function");
const Average_1 = require("./Average");
class PearsonCorrelation extends Function_1.Function {
    apply(values) {
        return PearsonCorrelation.apply(values.observed, values.predictions);
    }
    static apply(observed, predictions) {
        let outputAvg = Average_1.Average.apply(observed);
        let predictAvg = Average_1.Average.apply(predictions);
        let upper = 0, leftLower = 0, rightLower = 0;
        for (let i = 0; i < observed.length; i++) {
            upper += (observed[i] - outputAvg) * (predictions[i] - predictAvg);
            leftLower += (observed[i] - outputAvg) * (observed[i] - outputAvg);
            rightLower += (predictions[i] - predictAvg) * (predictions[i] - predictAvg);
        }
        return upper / (Math.sqrt(leftLower) * Math.sqrt(rightLower));
    }
}
exports.PearsonCorrelation = PearsonCorrelation;
//# sourceMappingURL=PearsonCorrelation.js.map