import { Reader } from "../Reader";
import { FileReader } from "../FileReader";

export declare interface CSVArgs {
    file: string;
    separator: string
}

export class CSVReader implements Reader<CSVArgs, string[][]> {
    private reader: FileReader = new FileReader();

    public read(args: CSVArgs): Promise<string[][]> {
        return new Promise<string[][]>(async (resolve, reject) => {
            this.reader.read(args.file)
            .then(lines => {
                let result = [];
                for (let line of lines)
                    result.push(line.split(args.separator));
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
        });
    }
}