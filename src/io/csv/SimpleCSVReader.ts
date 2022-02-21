import fs from "fs";
import { Reader } from "../Reader";

export interface CSVArgs {
    file: string;
    separator: string
}

export interface CSVResult {
    headers: string[],
    rows: any[]
}

export class StandardCSVReader implements Reader<CSVArgs, CSVResult> {
    public read(args: CSVArgs): Promise<CSVResult> {
        return new Promise<CSVResult>((resolve, reject) => {
            fs.readFile(args.file, 'utf-8', function(err, info) {
                console.log(err, info);
                if (err)
                    reject(err);
                let data = info.replace(/\r/g, '').split('\n');
                let headers = data[0].split(args.separator), rows = [];
                for (let i = 1; i < data.length; i++) {
                    let values = data[i].split(args.separator), datum: any = {};
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