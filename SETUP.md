# Email → Google Sheet Setup

## 1. Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new sheet.
2. Name row 1 headers: `Email` in A1, `Timestamp` in B1.

## 2. Create the Apps Script

1. In the sheet, open **Extensions → Apps Script**.
2. Replace the default code with:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data  = JSON.parse(e.postData.contents);

  sheet.appendRow([data.email, data.timestamp]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Save** (name the project anything, e.g. "Binomial Beta").

## 3. Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Type: **Web app**.
3. Settings:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy** and copy the web app URL.

## 4. Wire it into the site

Open `index.html` and replace the placeholder on this line:

```js
const APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL_HERE';
```

…with the URL you just copied.

Done. Every "Join Beta" submission will append a row to your sheet.
