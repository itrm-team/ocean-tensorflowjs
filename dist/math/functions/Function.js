"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Function = void 0;
class Function {
    constructor(name, deterministic) {
        this.name = name;
        this.deterministic = deterministic !== null && deterministic !== void 0 ? deterministic : true;
    }
}
exports.Function = Function;
//# sourceMappingURL=Function.js.map