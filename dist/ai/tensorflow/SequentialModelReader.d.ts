import { Reader } from "../../io/Reader";
import { SequentialModel } from "./SequentialModel";
export declare class SequentialModelReader implements Reader<string, SequentialModel> {
    read(folder: string): Promise<SequentialModel>;
    static read(folder: string): Promise<SequentialModel>;
}
