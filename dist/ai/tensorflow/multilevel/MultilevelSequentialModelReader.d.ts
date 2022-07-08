import { Reader } from "../../../io/Reader";
import { MultilevelSequentialModel } from "./MultilevelSequentialModel";
import { SequentialDataParser } from "./SequentialDataParser";
export declare interface MultilevelSequentialModelReaderArgs {
    folder: string;
}
export declare class MultilevelSequentialModelReader<I, O> implements Reader<MultilevelSequentialModelReaderArgs, MultilevelSequentialModel<I, O>> {
    protected reader: Reader<MultilevelSequentialModelReaderArgs, SequentialDataParser<I, O>>;
    constructor(reader: Reader<MultilevelSequentialModelReaderArgs, SequentialDataParser<I, O>>);
    read(args: MultilevelSequentialModelReaderArgs): Promise<MultilevelSequentialModel<I, O>>;
}
