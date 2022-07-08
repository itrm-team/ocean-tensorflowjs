export declare class ITRMConnection {
    static AI_MODULE_URL: string;
    static MODEL_SERVICE_URL: string;
    private domain;
    private apiKey;
    constructor(domain: string, apiKey: string);
    findProduct(name: string): Promise<any>;
    getDetails(product: any): Promise<any>;
    getUpdates(product: any): Promise<any>;
    getDataset(product: any): Promise<any>;
    getHistoricalPredictions(update: any): Promise<any>;
    getPrediction(update: any, input: any): Promise<any>;
    getPredictionList(update: any, inputs: []): Promise<any>;
}
