import { Reader } from "../../../io/Reader";
import { SequentialModel } from "../SequentialModel";
import { SequentialModelReader } from "../SequentialModelReader";
import { MultilevelSequentialModel } from "./MultilevelSequentialModel";
import { SequentialDataParser } from "./SequentialDataParser";

export declare interface MultilevelSequentialModelReaderArgs {
    folder: string
}

export class MultilevelSequentialModelReader<I, O> implements Reader<MultilevelSequentialModelReaderArgs, MultilevelSequentialModel<I, O>> {
    protected reader: Reader<MultilevelSequentialModelReaderArgs, SequentialDataParser<I, O>>;

    constructor(reader: Reader<MultilevelSequentialModelReaderArgs, SequentialDataParser<I, O>>) {
        this.reader = reader;
    }

    public async read(args: MultilevelSequentialModelReaderArgs): Promise<MultilevelSequentialModel<I, O>> {
        let model: SequentialModel = await SequentialModelReader.read(args.folder);
        let parser: SequentialDataParser<I, O> = await this.reader.read(args);
        return new MultilevelSequentialModel<I, O> (model, parser);
    }
}