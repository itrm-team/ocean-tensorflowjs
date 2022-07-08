import { Writer } from '../../io/Writer';
import { SequentialModel } from "./SequentialModel";

export declare interface SequentialWriteArgs {
    folder: string,
    model: SequentialModel
}

export class SequentialModelWriter implements Writer<SequentialWriteArgs, void> {
    public async write(args: SequentialWriteArgs): Promise<void> {
        console.log("> Saving model in", args.folder);
        await args.model.model.save(args.folder);
    }

    public static async write(args: SequentialWriteArgs): Promise<void> {
        console.log("> Saving model in", args.folder);
        await args.model.model.save(args.folder);
    }
}