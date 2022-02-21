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
exports.JSONCSVReader = void 0;
const CSVReader_1 = require("./CSVReader");
class JSONCSVReader {
    constructor() {
        this.reader = new CSVReader_1.CSVReader();
    }
    read(args) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            this.reader.read(args)
                .then(lines => {
                let headers = lines[0], rows = [];
                for (let i = 1; i < lines.length; i++) {
                    let datum = {};
                    for (let j = 0; j < lines[i].length; j++)
                        datum[headers[j]] = lines[i][j];
                    rows.push(datum);
                }
                resolve({ headers: headers, rows: rows });
            })
                .catch(error => {
                reject(error);
            });
        }));
    }
}
exports.JSONCSVReader = JSONCSVReader;
//# sourceMappingURL=JSONCSVReader.js.map