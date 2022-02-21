import { Reader } from "./Reader";
export declare class FileReader implements Reader<string, string[]> {
    read(file: string): Promise<string[]>;
}
