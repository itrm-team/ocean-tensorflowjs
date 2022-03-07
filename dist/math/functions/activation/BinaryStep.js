"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryStep = void 0;
class BinaryStep {
    activate(x) {
        return x < 0.0 ? 0.0 : 1.0;
    }
    derivate(x) {
        return x == 0 ? 1.0 : 0.0;
    }
}
exports.BinaryStep = BinaryStep;
//# sourceMappingURL=BinaryStep.js.map