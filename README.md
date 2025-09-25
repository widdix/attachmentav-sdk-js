# attachmentav-sdk-js

An SDK to integrate virus and malware scan capabilities into JavaScript applications. Scan files for viruses, trojans, and other kinds of malware with [attachmentAV](https://attachmentav.com) powered by Sophos.

## Getting started

First, install the module.

```sh
npm i @attachmentav/virus-scan-sdk-js
```

Second, get an API key by [subscribing to the attachmentAV API (SaaS)](https://attachmentav.com/subscribe/api/).

Third, send a scan request. Make sure to replace the `API_KEY_PLACEHOLDER` placeholder.

```js
const { ApiClient, AttachmentAVApi }  = require('@attachmentav/virus-scan-sdk-js');
const fs = require('fs');

const ATTACHMENTAV_API_KEY = '<API_KEY_PLACEHOLDER>';

const defaultClient = ApiClient.instance;
const apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = ATTACHMENTAV_API_KEY;

const api = new AttachmentAVApi()
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

## What is attachmentAV?

[attachmentAV](https://attachmentav.com) offers antivirus for SaaS and cloud platforms. Scan your files and attachments stored in the cloud for viruses, worms, and trojans. attachmentAV detects malware in real-time. Supports Amazon S3, Atlassian, Cloudflare R2, Salesforce, WordPress, and more.

The [attachmentAV Virus and Malware Scan API](https://attachmentav.com/solution/virus-malware-scan-api/) provides a REST API that allows you to integrate malware scans into your application. The solution comes in two variants:

* [attachmentAV Virus Scan API (SaaS)](https://attachmentav.com/help/virus-malware-scan-api/setup-guide/): Get started quickly with a fully managed service.
* [attachmentAV Virus Scan API (self-hosted on AWS)](https://attachmentav.com/help/virus-malware-scan-api-aws/setup-guide/): Deploy the production-ready API on AWS.

attachmentAV raises the bar for information security. Our solution is ISO 27001 certified and GDPR compliant. We are establishing, implementing, maintaining, and continually improving an information security management system (ISMS). Sensitive data is encrypted in transit as well as at rest and deleted immediately after processing. More than 1,000 customers trust our malware protection technology.

## Install SDK

```sh
npm i @attachmentav/virus-scan-sdk-js
```

## Configure SDK

### Configure SDK (SaaS)

An [active subscription and API key](https://attachmentav.com/help/virus-malware-scan-api/setup-guide/#api-key) are required. Replace `<API_KEY_PLACEHOLDER>` with the API key.

```javascript
const { ApiClient, AttachmentAVApi }  = require('@attachmentav/virus-scan-sdk-js');
const fs = require('fs');

const ATTACHMENTAV_API_KEY = '<API_KEY_PLACEHOLDER>';

const defaultClient = ApiClient.instance;
const apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = ATTACHMENTAV_API_KEY;

const api = new AttachmentAVApi()
```

### Configure SDK (self-hosted on AWS)

When following the setup guide, you specified the `ApiKeys` parameter for the CloudFormation stack. Replace `<API_KEY_PLACEHOLDER>` with one of those keys. 

```javascript
const { ApiClient, AttachmentAVApi }  = require('@attachmentav/virus-scan-sdk-js');
const fs = require('fs');

const ATTACHMENTAV_API_KEY = '<API_KEY_PLACEHOLDER>';

const defaultClient = ApiClient.instance;
const bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = ATTACHMENTAV_API_KEY;
defaultClient.basePath = 'https://example.com/api/v1';

const api = new AttachmentAVApi()
```

## Examples


### Sync Scan: File

Send a file to the attachmentAV Virus Scan API and process the scan result.

Maximum file size is 10 MB. The request timeout is 60 seconds.


```javascript
api.scanSyncBinaryPost(fs.readFileSync('README.md'), function(err, data, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(data));
  }
});
```

### Sync Scan: Download

Send a URL to the attachmentAV Virus Scan API. attachmentAV will download the file and return the scan result immediately.

Maximum file size is 10 MB. The request timeout is 60 seconds.


```javascript
api.scanSyncDownloadPost(new SyncDownloadScanRequest('https://example.com/download.txt'), function(err, data, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(data));
  }
});
```

### Sync Scan: S3

Send an S3 bucket name and object key to the attachmentAV Virus Scan API. attachmentAV will download the file and return the scan result immediately.

Maximum file size is 10 MB. The request timeout is 60 seconds.

> A [bucket policy](https://attachmentav.com/help/virus-malware-scan-api/setup-guide/#s3-bucket-policy) is required to grant attachmentAV access to private S3 objects.

```javascript
api.scanSyncS3Post(new SyncS3ScanRequest('example-bucket', 'demo.txt'), function(err, data, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(data));
  }
});
```

### Async Scan: Download

Send a URL to the attachmentAV Virus Scan API. attachmentAV will send the scan result to the callback URL. See [callback URL](https://attachmentav.com/help/virus-malware-scan-api/setup-guide/#callback-url) for details.

The maximum file size is 5 GB. The request timeout is 29 seconds; the asynchronous scan job is not affected by this limit.

> Not supported by attachmentAV Virus Scan API (Self-hosted on AWS) yet. Contact [hello@attachmentav.com](hello@attachmentav.com) to let us know, in case you need this feature. 

```javascript
api.scanAsyncDownloadPost(new AsyncDownloadScanRequest('https://example.com/download.txt', 'https://example.com/callback'), function(err, data, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully submitted scan job. Scan result will be sent to callback URL.');
  }
});
```

### Async Scan: S3

Send an S3 bucket name and object key to the attachmentAV Virus Scan API.  attachmentAV will send the scan result to the callback URL. See [callback URL](https://attachmentav.com/help/virus-malware-scan-api/setup-guide/#callback-url) for details.

The maximum file size is 5 GB. The request timeout is 29 seconds; the asynchronous scan job is not affected by this limit.

> A [bucket policy](https://attachmentav.com/help/virus-malware-scan-api/setup-guide/#s3-bucket-policy) is required to grant attachmentAV access to private S3 objects.

> Not supported by attachmentAV Virus Scan API (Self-hosted on AWS) yet. Contact [hello@attachmentav.com](hello@attachmentav.com) to let us know, in case you need this feature.

```javascript
api.scanAsyncS3Post(new AsyncS3ScanRequest('example-bucket', 'demo.txt', 'https://example.com/callback'), function(err, data, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully submitted scan job. Scan result will be sent to callback URL.');
  }
});
```

## Need help?

Do you need any help to get started with attachmentAV? [hello@attachmentav.com](mailto:hello@attachmentav.com).
