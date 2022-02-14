"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealOrder = void 0;
class RealOrder {
    constructor(minimize) {
        this.minimize = false;
        this.minimize = minimize !== null && minimize !== void 0 ? minimize : true;
    }
    compare(one, two) {
        if (this.minimize)
            return Math.abs(one - two) < 1e-9 ? 0 : (one < two ? 1 : -1);
        return Math.abs(one - two) < 1e-9 ? 0 : (one < two ? -1 : 1);
    }
    equals(one, two) {
        return Math.abs(one - two) < 1e-9;
    }
}
exports.RealOrder = RealOrder;
//# sourceMappingURL=RealOrder.js.map