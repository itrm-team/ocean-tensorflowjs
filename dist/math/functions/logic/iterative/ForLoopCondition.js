"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForLoopCondition = void 0;
class ForLoopCondition {
    constructor(end, start, inc) {
        this.iter = -1;
        this.start = 0;
        this.end = 0;
        this.inc = 1;
        this.set(start !== null && start !== void 0 ? start : 0, end, inc !== null && inc !== void 0 ? inc : 1);
    }
    set(start, end, inc) {
        this.start = start;
        this.end = end;
        this.inc = inc;
        this.iter = start - inc;
    }
    evaluate(obj) {
        this.iter += this.inc;
        return this.iter < this.end;
    }
    init() {
        this.iter = this.start - this.inc;
    }
    getIter() {
        return this.iter;
    }
}
exports.ForLoopCondition = ForLoopCondition;
//# sourceMappingURL=ForLoopCondition.js.map