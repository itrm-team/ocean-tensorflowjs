"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reversed = void 0;
class Reversed {
    constructor(original_order) {
        this.original_order = original_order;
    }
    compare(one, two) {
        return this.original_order.compare(two, one);
    }
    equals(one, two) {
        return this.original_order.equals(one, two);
    }
}
exports.Reversed = Reversed;
//# sourceMappingURL=Reversed.js.map