import { Writer } from '../../io/Writer';
import { SequentialModel } from "./SequentialModel";
export declare interface SequentialWriteArgs {
    folder: string;
    model: SequentialModel;
}
export declare class SequentialModelWriter implements Writer<SequentialWriteArgs, void> {
    write(args: SequentialWriteArgs): Promise<void>;
    static write(args: SequentialWriteArgs): Promise<void>;
}
