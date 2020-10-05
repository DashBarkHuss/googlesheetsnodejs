const fs = require("fs");
const { google } = require("googleapis");
const { authorize } = require(`./lib.js`);

// Load client secrets from a local file.
fs.readFile("credentials.json", (err, content) => {
  if (err) return console.log("Error loading client secret file:", err);
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content), getValues);
  authorize(JSON.parse(content), updateValues);
});

/**
 * Gets values from a spreed sheet
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function getValues(auth) {
  const sheets = google.sheets({ version: "v4", auth });
  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1Jt2ZwT-lDHhcegSJ_T5rdWYZxG88FTKn_N1FVnsTLWQ",
      range: "test!A1:E",
    },
    (err, res) => {
      console.log("\ngetValues...");
      if (err) return console.log("The API returned an error: " + err);
      const rows = res.data.values;
      if (rows.length) {
        console.log("A, E:");
        // Print columns A and E, which correspond to indices 0 and 4.
        rows.map((row) => {
          console.log(`${row[0]}, ${row[4]}`);
        });
      } else {
        console.log("No data found.");
      }
    }
  );
}
/**
 * writes values to a spreadsheet
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function updateValues(auth) {
  const sheets = google.sheets({ version: "v4", auth });
  sheets.spreadsheets.values.update(
    {
      // The ID of the spreadsheet to update.
      spreadsheetId: "1Jt2ZwT-lDHhcegSJ_T5rdWYZxG88FTKn_N1FVnsTLWQ", // TODO: Update placeholder value.

      // The A1 notation of the values to update.
      range: "test!A1:B2", // TODO: Update placeholder value.

      // How the input data should be interpreted.
      valueInputOption: "USER_ENTERED", // USER_ENTERED parses vs RAW doesn't
      resource: {
        range: "test!A1:B2",
        majorDimension: "ROWS",
        values: [
          ["a", "b"],
          ["c", "d"],
        ],
      },
    },

    function (err, res) {
      console.log("\nupdateValues...");
      if (err) console.log("error: ", err.message);
      if (res) console.log("response body: ", res.config.body);
    }
  );
}
