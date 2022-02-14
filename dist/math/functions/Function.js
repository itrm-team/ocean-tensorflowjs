"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Function = void 0;
class Function {
    constructor(name, deterministic) {
        this.name = name;
        this.deterministic = deterministic !== null && deterministic !== void 0 ? deterministic : true;
    }
    setApply(x) {
        let result = [];
        for (let value of x)
            result.push(this.apply(value));
        return result;
    }
}
exports.Function = Function;
//# sourceMappingURL=Function.js.map