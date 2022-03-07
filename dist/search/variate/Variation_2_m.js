"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variation_2_m = void 0;
const Variation_1 = require("./Variation");
class Variation_2_m extends Variation_1.Variation {
    apply(pop) {
        let result = [];
        for (let i = 0; i < pop.length; i += 2) {
            let next = this.variate(pop[i], pop[i + 1]);
            for (let j = 0; j < next.length; j++)
                result.push(next[j]);
        }
        return result;
    }
    arity() {
        return 2;
    }
}
exports.Variation_2_m = Variation_2_m;
//# sourceMappingURL=Variation_2_m.js.map