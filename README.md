## Steps

### 1. Click **Enable the Google Sheets API** to create a new Cloud Platform project in [Google Sheets API](https://developers.google.com/sheets/api/quickstart/nodejs).

- #### Notes:
  - For client OAuth pick "Desktop Application"
  - For a callback url I picked 'http://localhost:3000/callback' but it isn't used in this sample project.
  - Download the `credentials.json` file and put it in your working directory (ie: wherever you have index.js/app.js/server.js running).

### 2. Replace the `spreadsheetId`. You can find your spreadsheet's id in the URL of your spreadsheet.

```javascript
    {
      spreadsheetId: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
      range: "SheetName!A2:E",
    },
```

### 2. Replace the `range`. The sheet name of your sheet is located at the bottom of your google sheet. It isn't the name of the file.

### 3. Run `npm i`

### 3. Run `node index.js` in terminal and authorize following the instructions in the terminal.