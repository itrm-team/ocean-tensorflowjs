import { DDO, Account } from "@oceanprotocol/lib";
export declare interface OceanConfig {
    metadataCacheUri: string;
    providerUri: string;
    web3ProviderUrl: string;
}
export declare interface OceanDownloadRequest {
    asset: string | DDO;
    txId: string;
    serviceType: string;
    payerAddress: string;
    tokenAddress: string;
    consumerAccount: Account;
    destination: string;
}
export declare class OceanConnection {
    protected config: OceanConfig;
    constructor(config: OceanConfig);
    connect(): Promise<void>;
    download(req: OceanDownloadRequest): Promise<any>;
}
