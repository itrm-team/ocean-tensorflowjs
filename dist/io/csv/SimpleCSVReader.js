"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardCSVReader = void 0;
const fs_1 = __importDefault(require("fs"));
class StandardCSVReader {
    read(args) {
        return new Promise((resolve, reject) => {
            fs_1.default.readFile(args.file, 'utf-8', function (err, info) {
                console.log(err, info);
                if (err)
                    reject(err);
                let data = info.replace(/\r/g, '').split('\n');
                let headers = data[0].split(args.separator), rows = [];
                for (let i = 1; i < data.length; i++) {
                    let values = data[i].split(args.separator), datum = {};
                    for (let j = 0; j < values.length; j++)
                        datum[headers[j]] = values[j];
                    rows.push(datum);
                }
                resolve({
                    headers: headers,
                    rows: rows
                });
            });
        });
    }
}
exports.StandardCSVReader = StandardCSVReader;
//# sourceMappingURL=SimpleCSVReader.js.map