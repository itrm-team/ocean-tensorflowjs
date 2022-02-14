"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorted = void 0;
class Sorted {
    constructor(order) {
        this.data = [];
        this.order = order;
    }
    add(datum) {
        if (this.data.length > 0) {
            let index = this.findIndex(datum);
            this.data.splice(index, 0, datum);
        }
        else
            this.data.push(datum);
    }
    findIndex(datum) {
        let li = 0, lo = this.data.length - 1;
        while (li < lo) {
            let mid = Math.floor((li + lo) / 2.0);
            if (this.order.compare(datum, this.data[mid]) >= 0)
                li = mid + 1;
            else
                lo = mid;
        }
        return (li == this.data.length - 1) ? (this.order.compare(datum, this.data[this.data.length - 1]) > 0 ? li + 1 : li) : li;
    }
    get(index) {
        return this.data[index];
    }
    size() {
        return this.data.length;
    }
}
exports.Sorted = Sorted;
//# sourceMappingURL=Sorted.js.map