"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAPIConnection = void 0;
const fs_1 = __importDefault(require("fs"));
const readline_1 = __importDefault(require("readline"));
const { google } = require('googleapis');
class GoogleAPIConnection {
    constructor(tokenPath, scope) {
        this.auth = undefined;
        this.tokenPath = tokenPath;
        this.scope = scope;
    }
    authorize(credentials) {
        return new Promise((resolve, reject) => {
            const { client_secret, client_id, redirect_uris } = credentials;
            const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
            fs_1.default.readFile(this.tokenPath, (err, token) => __awaiter(this, void 0, void 0, function* () {
                if (err) {
                    this.auth = yield this.getNewToken(oAuth2Client);
                    resolve();
                }
                oAuth2Client.setCredentials(JSON.parse(token));
                this.auth = oAuth2Client;
                resolve();
            }));
        });
    }
    getNewToken(oAuth2Client) {
        return new Promise((resolve, reject) => {
            const authUrl = oAuth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: this.scope,
            });
            console.log('Authorize this app by visiting this url:', authUrl);
            const rl = readline_1.default.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            rl.question('Enter the code from that page here: ', (code) => {
                rl.close();
                oAuth2Client.getToken(code, (err, token) => {
                    if (err) {
                        console.error('Error while trying to retrieve access token', err);
                        reject(err);
                    }
                    oAuth2Client.setCredentials(token);
                    // Store the token to disk for later program executions
                    fs_1.default.writeFile(this.tokenPath, JSON.stringify(token), (err) => {
                        if (err)
                            return console.error(err);
                        console.log('Token stored to', this.tokenPath);
                    });
                    resolve(oAuth2Client);
                });
            });
        });
    }
    getSpreadsheetConnection() {
        return google.sheets({ version: 'v4', auth: this.auth });
    }
    getDriveConnection() {
        return google.drive({ version: 'v3', auth: this.auth });
    }
    getDocsConnection() {
        return google.docs({ version: 'v1', auth: this.auth });
    }
}
exports.GoogleAPIConnection = GoogleAPIConnection;
//# sourceMappingURL=GoogleAPIConnection.js.map