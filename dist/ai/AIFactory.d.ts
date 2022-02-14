import { AIModel } from "./AIModel";
export interface AIFactory<I, O> {
    generate(): Promise<AIModel<I, O>>;
    read(path: string): Promise<AIModel<I, O>>;
}
