import fs from 'fs';
import { StandardCSVReader, GoogleAPIConnection, SpreadsheetConnection } from 'oceanai-js';

async function csvDataRead() {
    let reader = new StandardCSVReader();
    let result = await reader.read({
        file: './src/dataset.csv',
        separator: ','
    });
    console.log("> result:", result);
}

function googleDataRead() {
    fs.readFile('./src/credentials.json', 'utf-8', async (err: any, content: any) => {
        if (err)
            return console.log('Error loading client secret file:', err);
        let credentials = JSON.parse(content);
        let spreadsheetId = '1VdP4j5cUXBwx8jV8c3FmVBEwP4VmtDxRHVRvEWhcx2A';
        let google = new GoogleAPIConnection('./src/token.json', [
            'https://www.googleapis.com/auth/spreadsheets'
        ]);
        let spreadsheets = new SpreadsheetConnection(google);
        await spreadsheets.init(credentials.web);
        let details = await spreadsheets.getSpreadsheetDetails(spreadsheetId);
        console.log("> details:", details);
        let data = await spreadsheets.getSheetData({
            spreadsheetId: spreadsheetId,
            sheet: 'data',
            fromColumn: 'A',
            toColum: 'E',
            formRow: 1,
            toRow: 401
        });
        console.log("> data:", data, data.length);
    });
}

async function run() {
    await csvDataRead();
    await googleDataRead();
}

run();