import { Reader } from "../Reader";
export interface CSVArgs {
    file: string;
    separator: string;
}
export interface CSVResult {
    headers: string[];
    rows: any[];
}
export declare class StandardCSVReader implements Reader<CSVArgs, CSVResult> {
    read(args: CSVArgs): Promise<CSVResult>;
}
