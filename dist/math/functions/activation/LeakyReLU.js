"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeakyReLU = void 0;
class LeakyReLU {
    constructor(leak) {
        this.leak = leak;
    }
    activate(x) {
        return x > 0 ? x : this.leak * x;
    }
    derivate(x) {
        return x > 0 ? 1 : this.leak;
    }
}
exports.LeakyReLU = LeakyReLU;
//# sourceMappingURL=LeakyReLU.js.map