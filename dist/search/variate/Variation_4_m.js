"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variation_4_m = void 0;
const Variation_1 = require("./Variation");
class Variation_4_m extends Variation_1.Variation {
    apply(pop) {
        let result = [];
        for (let i = 0; i < pop.length; i += 4) {
            let next = this.variate(pop[i], pop[i + 1], pop[i + 2], pop[i + 3]);
            for (let j = 0; j < next.length; j++)
                result.push(next[j]);
        }
        return result;
    }
    arity() {
        return 4;
    }
}
exports.Variation_4_m = Variation_4_m;
//# sourceMappingURL=Variation_4_m.js.map