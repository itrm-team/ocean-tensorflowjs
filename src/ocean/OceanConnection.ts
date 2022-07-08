import { Ocean, DataTokens, ConfigHelper, DDO, Account } from "@oceanprotocol/lib";
import fs from "fs";
//const defaultConfig = new ConfigHelper().getConfig("development");
//const Web3 = require("web3");

export declare interface OceanConfig {
    metadataCacheUri: string,
    providerUri: string,
    web3ProviderUrl: string
}

export declare interface OceanDownloadRequest {
    asset: string | DDO,
    txId: string,
    serviceType: string,
    payerAddress: string,
    tokenAddress: string,
    //consumerAccount: Account,
    destination: string
}

export class OceanConnection {
    protected config: OceanConfig;
    //protected ocean: Ocean;

    constructor(config: OceanConfig) {
        this.config = config;
    }

    public async connect() {
        /**
         * order(
         *   asset: string | DDO,
         *   serviceType: string,
         *   payerAddress: string,
         *   serviceIndex?: number | undefined,
         *   mpAddress?: string | undefined,
         *   consumerAddress?: string | undefined,
         *   userCustomParameters?: UserCustomParameters | undefined,
         *   authService?: string | undefined,
         *   searchPreviousOrders?: boolean | undefined
         * ): Promise<string>
         * Assets.download(
         *   asset: string | DDO,
         *   txId: string,
         *   tokenAddress: string,
         *   consumerAccount: Account,
         *   destination: string,
         *   index?: number | undefined,
         *   userCustomParameters?: UserCustomParameters | undefined
         * ): Promise<...>
         */
    }

    public async download(req: OceanDownloadRequest): Promise<any> {
        //this.ocean.assets.order();
        //this.ocean.assets.download();
        let lines =
            "input1;input2;input3;input4;output1;output2\n" +
            "0.1;0.3;0.4;0.4;0.25;0.4\n" +
            "0.8;0.2;0.2;0.6;0.5;0.4\n" +
            "0.2;0.6;0.4;0.3;0.5;0.35\n" +
            "0.3;0.8;0.7;0.9;0.55;0.8\n" +
            "0.1;0.2;0.3;0.2;0.15;0.25\n" +
            "0.4;0.4;0.9;0.1;0.4;0.5\n" +
            "0.1;0.3;0.2;0.5;0.4;0.35\n" +
            "0.5;0.5;0.3;0.3;0.5;0.3\n" +
            "0.7;0.6;0.2;0.5;0.65;0.35";
        return new Promise((resolve, reject) => {
            fs.writeFile(req.destination + "dataset.csv", lines, function(err) {
                if (err)
                    console.log(err);
                resolve(lines);
            });
        });
    }
}