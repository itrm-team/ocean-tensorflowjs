export declare interface GoogleCredentials {
    client_id: string;
    client_secret: string;
    redirect_uris: string[];
}
export declare class GoogleAPIConnection {
    private tokenPath;
    private scope;
    private auth;
    constructor(tokenPath: string, scope: string[]);
    authorize(credentials: GoogleCredentials): Promise<void>;
    private getNewToken;
    getSpreadsheetConnection(): any;
    getDriveConnection(): any;
    getDocsConnection(): any;
}
