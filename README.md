# attachmentav-sdk-js

A virus scan SDK for JavaScript. Scan files for viruses, trojans, and other kinds of malware with [attachmentAV](https://attachmentav.com).

## Getting started

First, install the module.

```sh
npm i @widdix/attachmentav-sdk-js
```

Second, [subscribe to the attachmentAV API (SaaS)](https://attachmentav.com/subscribe/api/) or [install attachmentAV API (Self-hosted on AWS)](https://attachmentav.com/help/virus-malware-scan-api-aws/setup-guide/#installation).

Third, send scan request. Make sure, to 

```js
const attachmentav = require('@widdix/attachmentav-sdk-js');
const fs = require('fs');

const ATTACHMENTAV_API_KEY = 'your api key';

var defaultClient = attachmentav.ApiClient.instance;
var apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = ATTACHMENTAV_API_KEY;

var api = new attachmentav.AttachmentAVApi()
api.scanSyncBinaryPost(fs.readFileSync('/path/to/file'), function(err, data, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(data));
  }
});
```

The request returns a scan result similar to the following example.

```
{"status":"clean","size":"1024","realfiletype":"..."}
```
