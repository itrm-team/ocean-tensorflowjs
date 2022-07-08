import fs from "fs";
import { Reader } from "./Reader";

export class FileReader implements Reader<string, string[]> {
    
    public read(file: string): Promise<string[]> {
        return new Promise<string[]>((resolve, reject) => {
            fs.readFile(file, 'utf-8', function(err, info) {
                if (err)
                    reject(err);
                else
                    resolve(info.replace(/\r/g, '').split('\n'));
            });
        });
    }
}