import { Shuffle } from "../../..";
import { Dataset } from "../Dataset";
import { TrainingGoal } from "../TrainingGoal";

export class KFoldCrossValidation<I, O, P> extends TrainingGoal<I[], O[], P> {
    private goal: TrainingGoal<I[], O[], P>;
    private trainingSets: Dataset<I[], O[]>[] = [];
    private testingSets: Dataset<I[], O[]>[] = [];
    private k: number;
    private index: number;

    constructor(k: number, goal: TrainingGoal<I[], O[], P>) {
        super('KFoldCrossValidation', goal.dataset, goal.getOrder());
        this.goal = goal;
        this.k = k;
        this.index = 0;
    }

    public init(): void {
        this.createSets();
        let indices = Shuffle.indices(this.dataset.inputs), piv = 0;
        for (let index of indices) {
            for (let i = 0; i < this.k; i++)
                if (i == piv)
                    this.add(this.testingSets[i], this.dataset.inputs[index], this.dataset.outputs[index]);
                else
                    this.add(this.trainingSets[i], this.dataset.inputs[index], this.dataset.outputs[index]);
            piv = (piv + 1) % this.k;
        }
        this.index = 0;
    }

    private add(dataset: Dataset<I[], O[]>, input: I, output: O) {
        dataset.inputs.push(input);
        dataset.outputs.push(output);
    }

    private createSets() {
        this.trainingSets = [];
        this.testingSets = [];
        for (let i = 0; i < this.k; i++) {
            this.trainingSets.push(new Dataset<I[], O[]>([], []));
            this.testingSets.push(new Dataset<I[], O[]>([], []));
        }
    }

    public getTrainingSet(): Dataset<I[], O[]> {
        this.index = (this.index + 1) % this.k;
        this.goal.dataset = this.testingSets[this.index];
        return this.trainingSets[this.index];
    }

    public evaluate(outputs: O[], predictions: O[]): P | PromiseLike<P> {
        return this.goal.evaluate(outputs, predictions);
    }
}