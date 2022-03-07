"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequentialSpace = void 0;
const tf = __importStar(require("@tensorflow/tfjs-node"));
const Space_1 = require("../../search/space/Space");
const SequentialModel_1 = require("./SequentialModel");
class SequentialSpace extends Space_1.Space {
    constructor(layers) {
        super();
        this.layers = layers;
    }
    isFeasible(model) {
        return true;
    }
    feasibility(model) {
        return 1.0;
    }
    restore(model) {
        return model;
    }
    generate() {
        let model = tf.sequential({ layers: this.layers });
        return new SequentialModel_1.SequentialModel(model);
    }
}
exports.SequentialSpace = SequentialSpace;
//# sourceMappingURL=SequentialSpace.js.map