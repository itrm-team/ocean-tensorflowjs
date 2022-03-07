"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tanh = void 0;
class Tanh {
    activate(x) {
        return Math.tanh(x);
    }
    derivate(x) {
        return 1 + Math.tanh(x) * Math.tanh(x);
    }
}
exports.Tanh = Tanh;
//# sourceMappingURL=Tanh.js.map