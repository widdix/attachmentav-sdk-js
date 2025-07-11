# AttachmentAv.AttachmentAVApi

All URIs are relative to *https://eu.developer.attachmentav.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scanSyncBinaryPost**](AttachmentAVApi.md#scanSyncBinaryPost) | **POST** /scan/sync/binary | 
[**scanSyncDownloadPost**](AttachmentAVApi.md#scanSyncDownloadPost) | **POST** /scan/sync/download | 
[**scanSyncFormPost**](AttachmentAVApi.md#scanSyncFormPost) | **POST** /scan/sync/form | 
[**scanSyncS3Post**](AttachmentAVApi.md#scanSyncS3Post) | **POST** /scan/sync/s3 | 



## scanSyncBinaryPost

> ScanResult scanSyncBinaryPost(body)



Upload a file, scan the file, and return the scan result.

### Example

```javascript
import AttachmentAv from 'attachment_av';
let defaultClient = AttachmentAv.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new AttachmentAv.AttachmentAVApi();
let body = "/path/to/file"; // File | 
apiInstance.scanSyncBinaryPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **File**|  | 

### Return type

[**ScanResult**](ScanResult.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json


## scanSyncDownloadPost

> ScanResult scanSyncDownloadPost(syncDownloadScanRequest)



Download a file from a remote location (HTTP/HTTPS), scan the file, and return the scan result.

### Example

```javascript
import AttachmentAv from 'attachment_av';
let defaultClient = AttachmentAv.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new AttachmentAv.AttachmentAVApi();
let syncDownloadScanRequest = new AttachmentAv.SyncDownloadScanRequest(); // SyncDownloadScanRequest | 
apiInstance.scanSyncDownloadPost(syncDownloadScanRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **syncDownloadScanRequest** | [**SyncDownloadScanRequest**](SyncDownloadScanRequest.md)|  | 

### Return type

[**ScanResult**](ScanResult.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## scanSyncFormPost

> ScanResult scanSyncFormPost(file)



Upload a file, scan the file, and return the scan result.

### Example

```javascript
import AttachmentAv from 'attachment_av';
let defaultClient = AttachmentAv.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new AttachmentAv.AttachmentAVApi();
let file = null; // File | 
apiInstance.scanSyncFormPost(file, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**File**](File.md)|  | 

### Return type

[**ScanResult**](ScanResult.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## scanSyncS3Post

> ScanResult scanSyncS3Post(syncS3ScanRequest)



Download a file from S3, scan the file, and return the scan result. A bucket policy is required to grant attachmentAV access to the S3 objects.

### Example

```javascript
import AttachmentAv from 'attachment_av';
let defaultClient = AttachmentAv.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new AttachmentAv.AttachmentAVApi();
let syncS3ScanRequest = new AttachmentAv.SyncS3ScanRequest(); // SyncS3ScanRequest | 
apiInstance.scanSyncS3Post(syncS3ScanRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **syncS3ScanRequest** | [**SyncS3ScanRequest**](SyncS3ScanRequest.md)|  | 

### Return type

[**ScanResult**](ScanResult.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

