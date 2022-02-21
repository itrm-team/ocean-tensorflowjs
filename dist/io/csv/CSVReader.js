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
exports.CSVReader = void 0;
const FileReader_1 = require("../FileReader");
class CSVReader {
    constructor() {
        this.reader = new FileReader_1.FileReader();
    }
    read(args) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            this.reader.read(args.file)
                .then(lines => {
                let result = [];
                for (let line of lines)
                    result.push(line.split(args.separator));
                resolve(result);
            })
                .catch(error => {
                reject(error);
            });
        }));
    }
}
exports.CSVReader = CSVReader;
//# sourceMappingURL=CSVReader.js.map