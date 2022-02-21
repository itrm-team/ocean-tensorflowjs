import { Reader } from "../Reader";
export declare interface CSVArgs {
    file: string;
    separator: string;
}
export declare class CSVReader implements Reader<CSVArgs, string[][]> {
    private reader;
    read(args: CSVArgs): Promise<string[][]>;
}
