import { waitForDebugger } from "inspector";
import { GoogleAPIConnection, GoogleCredentials } from "../GoogleAPIConnection";

export declare interface SheetDataRequestArgs {
    spreadsheetId: string;
    sheet: string;
    fromColumn: string;
    toColum: string;
    formRow: number;
    toRow: number;
    step?: number;
}

export class SpreadsheetConnection {
    private connection: GoogleAPIConnection;
    private sheets: any;

    constructor(connection: GoogleAPIConnection) {
        this.connection = connection;
    }

    public async init(credentials: GoogleCredentials) {
        await this.connection.authorize(credentials);
        this.sheets = this.connection.getSpreadsheetConnection();
    }

    public async getSpreadsheetDetails(spreadsheetId: string) {
        return await this.sheets.spreadsheets.get({
            spreadsheetId: spreadsheetId,
            ranges: [],
            includeGridData: false
        });
    }

    public async getSheetData(args: SheetDataRequestArgs): Promise<any[]> {
        let step = args.step ?? 100;
        let values: any[] = [], limit = args.formRow - 1;
        do {
            let from = limit + 1;
            limit = Math.min(limit + step, args.toRow);
            let range = args.sheet + "!" + args.fromColumn + from + ":" + args.toColum + "" + limit;
            console.log("> requesting range:", range);
            let data = await this.sheets.spreadsheets.values.get({
                spreadsheetId: args.spreadsheetId,
                range: range
            });
            values = values.concat(data.data.values);
            this.waitFor(1000);
        } while (limit + 1 <= args.toRow);
        return values;
    }

    waitFor(millis: number) {
        let start = Date.now(), currentDate = null;
        do { currentDate = Date.now(); } while (currentDate - start < millis);
    }
}