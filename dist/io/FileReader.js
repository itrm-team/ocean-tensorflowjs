"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class FileReader {
    read(file) {
        return new Promise((resolve, reject) => {
            fs_1.default.readFile(file, 'utf-8', function (err, info) {
                if (err)
                    reject(err);
                resolve(info.replace(/\r/g, '').split('\n'));
            });
        });
    }
}
exports.FileReader = FileReader;
//# sourceMappingURL=FileReader.js.map