"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchFunction = void 0;
const Function_1 = require("../math/functions/Function");
class SearchFunction extends Function_1.Function {
    constructor(name, deterministic) {
        super(name, deterministic !== null && deterministic !== void 0 ? deterministic : true);
    }
    apply(space) {
        return this.solve(space);
    }
}
exports.SearchFunction = SearchFunction;
//# sourceMappingURL=SearchFunction.js.map