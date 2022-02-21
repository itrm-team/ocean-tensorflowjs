import { Reader } from "../Reader";
import { CSVArgs, CSVReader } from "./CSVReader";

export declare interface JSONCSVResult {
    headers: string[],
    rows: any[]
}

export class JSONCSVReader implements Reader<CSVArgs, JSONCSVResult> {
    private reader: CSVReader = new CSVReader();

    public read(args: CSVArgs): Promise<JSONCSVResult> {
        return new Promise<JSONCSVResult>(async (resolve, reject) => {
            this.reader.read(args)
            .then(lines => {
                let headers = lines[0], rows = [];
                for (let i = 1; i < lines.length; i++) {
                    let datum: any = {};
                    for (let j = 0; j < lines[i].length; j++)
                        datum[headers[j]] = lines[i][j];
                    rows.push(datum);
                }
                resolve({ headers: headers, rows: rows })
            })
            .catch(error => {
                reject(error);
            });
        });
    }
}