"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Space = void 0;
class Space {
    pick(total) {
        let result = [];
        for (let i = 0; i < total; i++)
            result.push(this.generate());
        return result;
    }
    repair(pop) {
        let result = [];
        for (let item of pop)
            result.push(this.restore(item));
        return result;
    }
}
exports.Space = Space;
//# sourceMappingURL=Space.js.map