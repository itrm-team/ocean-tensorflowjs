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
export declare class SpreadsheetConnection {
    private connection;
    private sheets;
    constructor(connection: GoogleAPIConnection);
    init(credentials: GoogleCredentials): Promise<void>;
    getSpreadsheetDetails(spreadsheetId: string): Promise<any>;
    getSheetData(args: SheetDataRequestArgs): Promise<any[]>;
    waitFor(millis: number): void;
}
