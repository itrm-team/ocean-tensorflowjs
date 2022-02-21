import fs from "fs";
import readline from "readline";

const { google } = require('googleapis');

export declare interface GoogleCredentials {
    client_id: string,
    client_secret: string,
    redirect_uris: string[]
}

export class GoogleAPIConnection {
    private tokenPath: string;
    private scope: string[];
    private auth: any = undefined;

    constructor(tokenPath: string, scope: string[]) {
        this.tokenPath = tokenPath;
        this.scope = scope;
    }

    public authorize(credentials: GoogleCredentials): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const { client_secret, client_id, redirect_uris } = credentials;
            const oAuth2Client = new google.auth.OAuth2(
                client_id, client_secret, redirect_uris[0]
            );
            fs.readFile(this.tokenPath, async (err: any, token: any) => {
                if (err) {
                    this.auth = await this.getNewToken(oAuth2Client);
                    resolve();
                }
                oAuth2Client.setCredentials(JSON.parse(token));
                this.auth = oAuth2Client;
                resolve();
            });
        });
    }
    
    private getNewToken(oAuth2Client: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const authUrl = oAuth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: this.scope,
            });
            console.log('Authorize this app by visiting this url:', authUrl);
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            rl.question('Enter the code from that page here: ', (code) => {
                rl.close();
                oAuth2Client.getToken(code, (err: any, token: any) => {
                  if (err) {
                    console.error('Error while trying to retrieve access token', err);
                    reject(err);
                  }
                  oAuth2Client.setCredentials(token);
                  // Store the token to disk for later program executions
                  fs.writeFile(this.tokenPath, JSON.stringify(token), (err) => {
                    if (err) return console.error(err);
                    console.log('Token stored to', this.tokenPath);
                  });
                  resolve(oAuth2Client);
                });
            });
        });
    }

    public getSpreadsheetConnection(): any {
        return google.sheets({ version: 'v4', auth: this.auth });
    }

    public getDriveConnection(): any {
        return google.drive({ version: 'v3', auth: this.auth });
    }

    public getDocsConnection(): any {
        return google.docs({ version: 'v1', auth: this.auth });
    }
}