"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        return __awaiter(this, void 0, void 0, function* () {
            return this.order.compare(yield this.apply(x), yield this.apply(y));
        });
    }
}
exports.Goal = Goal;
//# sourceMappingURL=Goal.js.map