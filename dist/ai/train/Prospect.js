"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prospect = void 0;
class Prospect {
    constructor(iter, model, performance, goal) {
        this.iter = iter;
        this.model = model;
        this.performance = performance;
        this.order = goal.getOrder();
    }
    compare(prospect) {
        return this.order.compare(this.performance, prospect.performance);
    }
}
exports.Prospect = Prospect;
//# sourceMappingURL=Prospect.js.map