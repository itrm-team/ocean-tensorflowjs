"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisjointSetUnion = void 0;
class DisjointSetUnion {
    constructor(size) {
        this.parents = [];
        for (let i = 0; i < size; i++)
            this.parents.push(i);
    }
    restart(size) {
        this.parents = [];
        for (let i = 0; i < size; i++)
            this.parents.push(i);
    }
    find(v) {
        if (v == this.parents[v])
            return v;
        return this.find(this.parents[v]);
    }
    join(a, b) {
        let pa = this.find(a);
        let pb = this.find(b);
        if (pa != pb)
            this.parents[pa] = pb;
    }
}
exports.DisjointSetUnion = DisjointSetUnion;
//# sourceMappingURL=DisjointSetUnion.js.map