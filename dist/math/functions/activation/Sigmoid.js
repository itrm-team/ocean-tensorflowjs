"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sigmoid = void 0;
class Sigmoid {
    activate(x) {
        return 1.0 / (1.0 + Math.exp(-x));
    }
    derivate(x) {
        let val = Math.exp(-x);
        return val / Math.pow(1.0 + val, 2.0);
    }
}
exports.Sigmoid = Sigmoid;
//# sourceMappingURL=Sigmoid.js.map