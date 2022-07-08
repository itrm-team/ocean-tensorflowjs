export interface PopulationReplacement<T> {
    apply(current: T[], next: T[]): T[] | PromiseLike<T[]>;
    init(): void;
}
