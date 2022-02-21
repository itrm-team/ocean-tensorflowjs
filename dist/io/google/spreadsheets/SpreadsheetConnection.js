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
exports.SpreadsheetConnection = void 0;
class SpreadsheetConnection {
    constructor(connection) {
        this.connection = connection;
    }
    init(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.authorize(credentials);
            this.sheets = this.connection.getSpreadsheetConnection();
        });
    }
    getSpreadsheetDetails(spreadsheetId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sheets.spreadsheets.get({
                spreadsheetId: spreadsheetId,
                ranges: [],
                includeGridData: false
            });
        });
    }
    getSheetData(args) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let step = (_a = args.step) !== null && _a !== void 0 ? _a : 100;
            let values = [], limit = args.formRow - 1;
            do {
                let from = limit + 1;
                limit = Math.min(limit + step, args.toRow);
                let range = args.sheet + "!" + args.fromColumn + from + ":" + args.toColum + "" + limit;
                console.log("> requesting range:", range);
                let data = yield this.sheets.spreadsheets.values.get({
                    spreadsheetId: args.spreadsheetId,
                    range: range
                });
                values = values.concat(data.data.values);
            } while (limit + 1 <= args.toRow);
            return values;
        });
    }
}
exports.SpreadsheetConnection = SpreadsheetConnection;
//# sourceMappingURL=SpreadsheetConnection.js.map