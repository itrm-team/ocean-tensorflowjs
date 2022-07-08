"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleHaeaOperatorsDescriptors = void 0;
const Average_1 = require("../../../math/functions/statistics/Average");
class SimpleHaeaOperatorsDescriptors {
    describe(operators) {
        let rates = operators.getAllRates();
        let result = [];
        for (let i = 0; i < rates[0].length; i++) {
            let values = [];
            for (let rate of rates)
                values.push(rate[i]);
            values.push(Average_1.Average.apply(values));
        }
        return result;
    }
}
exports.SimpleHaeaOperatorsDescriptors = SimpleHaeaOperatorsDescriptors;
//# sourceMappingURL=SimpleHaeaOperatorsDescriptors.js.map