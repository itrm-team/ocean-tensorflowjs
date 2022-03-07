"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleRandomGenerator = void 0;
class SimpleRandomGenerator {
    generate(total) {
        let result = [];
        for (let i = 0; i < total; i++)
            result.push(this.next());
        return result;
    }
}
exports.SimpleRandomGenerator = SimpleRandomGenerator;
//# sourceMappingURL=SimpleRandomGenerator.js.map