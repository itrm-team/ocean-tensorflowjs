"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goal = void 0;
const Function_1 = require("../math/functions/Function");
class Goal extends Function_1.Function {
    constructor(name, order) {
        super(name);
        this.order = order;
    }
    getOrder() {
        return this.order;
    }
    compare(x, y) {
        return this.order.compare(this.apply(x), this.apply(y));
    }
}
exports.Goal = Goal;
//# sourceMappingURL=Goal.js.map