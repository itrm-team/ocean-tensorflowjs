"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shuffle = void 0;
class Shuffle {
    static apply(set, indices) {
        let positions = indices !== null && indices !== void 0 ? indices : this.indices(set), result = [];
        for (let index of positions)
            result.push(set[index]);
        return result;
    }
    static indices(set) {
        let result = Array.from(Array(set.length).keys());
        for (let i = 0; i < result.length; i++) {
            let b = this.getRandomInt(result.length);
            let temp = result[i];
            result[i] = result[b];
            result[b] = temp;
        }
        return result;
    }
    static getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}
exports.Shuffle = Shuffle;
//# sourceMappingURL=Shuffle.js.map