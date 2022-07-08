import axios from 'axios';

export class ITRMConnection {
    public static AI_MODULE_URL = "https://services.itrmachines.com/aimodule";
    public static MODEL_SERVICE_URL = "https://services.itrmachines.com/modelservice";

    private domain: string;
    private apiKey: string;

    constructor(domain: string, apiKey: string) {
        this.domain = domain;
        this.apiKey = apiKey;
    }

    public findProduct(name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let url = ITRMConnection.AI_MODULE_URL + "/products/myProductsAPI/?apiKey=" + this.apiKey;
            axios.get(url, { headers: {
                'Content-Type': 'application/json',
                'Origin': this.domain
            }}).then(response => {
                for (let network of response.data)
                    if (network.name === name)
                        resolve(network);
                resolve(undefined);
            }).catch(err => { reject(err); });
        });
    }

    public getDetails(product: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let url = ITRMConnection.MODEL_SERVICE_URL + "/model/productAPI/" + product.productId + "/?apiKey=" + this.apiKey;
            axios.get(url, { headers: {
                'Content-Type': 'application/json',
                'Origin': this.domain
            }}).then(response => {
                resolve(response.data);
            }).catch(err => { reject(err); });
        });
    }

    public getUpdates(product: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.getDetails(product).then(details => {
                resolve(details.updates);
            }).catch(err => { reject(err); });
        });
    }

    public getDataset(product: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.getDetails(product).then(details => {
                resolve(details.data);
            }).catch(err => { reject(err); });
        });
    }

    public getHistoricalPredictions(update: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let url = ITRMConnection.MODEL_SERVICE_URL + "/modelUpdate/predictionsBatchAPI/" + update.modelUpdateId + "/?apiKey=" + this.apiKey;
            axios.post(url, {}, { headers: {
                'Content-Type': 'application/json',
                'Origin': this.domain
            }}).then(response => {
                resolve(response.data.predictions);
            }).catch(err => { reject(err); });
        });
    }

    public getPrediction(update: any, input: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let url = ITRMConnection.MODEL_SERVICE_URL + "/modelUpdate/predictionsAPI/" + update.modelUpdateId + "/?apiKey=" + this.apiKey;
            axios.post(url, { input: input }, { headers: {
                'Content-Type': 'application/json',
                'Origin': this.domain
            }}).then(response => {
                resolve(response);
            }).catch(err => { reject(err); });
        });
    }

    public getPredictionList(update: any, inputs: []): Promise<any> {
        return new Promise((resolve, reject) => {
            let url = ITRMConnection.MODEL_SERVICE_URL + "/modelUpdate/predictionListAPI/" + update.modelUpdateId + "/?apiKey=" + this.apiKey;
            axios.post(url, { inputs: inputs }, { headers: {
                'Content-Type': 'application/json',
                'Origin': this.domain
            }}).then(response => {
                resolve(response);
            }).catch(err => { reject(err); });
        });
    }
}