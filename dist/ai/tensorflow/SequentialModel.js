"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequentialModel = void 0;
class SequentialModel {
    constructor(model) {
        this.model = model;
    }
    apply(input, args) {
        return this.model.predict(input, args);
    }
    getTensorflowModel() {
        return this.model;
    }
}
exports.SequentialModel = SequentialModel;
//# sourceMappingURL=SequentialModel.js.map