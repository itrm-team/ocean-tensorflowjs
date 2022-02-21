import { Reader } from "../Reader";
import { CSVArgs } from "./CSVReader";
export declare interface JSONCSVResult {
    headers: string[];
    rows: any[];
}
export declare class JSONCSVReader implements Reader<CSVArgs, JSONCSVResult> {
    private reader;
    read(args: CSVArgs): Promise<JSONCSVResult>;
}
