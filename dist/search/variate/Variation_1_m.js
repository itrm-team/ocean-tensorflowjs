"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variation_1_m = void 0;
const Variation_1 = require("./Variation");
class Variation_1_m extends Variation_1.Variation {
    apply(pop) {
        let result = [];
        for (let i = 0; i < pop.length; i++) {
            let next = this.variate(pop[i]);
            for (let j = 0; j < next.length; j++)
                result.push(next[j]);
        }
        return result;
    }
    arity() {
        return 1;
    }
}
exports.Variation_1_m = Variation_1_m;
//# sourceMappingURL=Variation_1_m.js.map