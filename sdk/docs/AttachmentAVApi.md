# @attachmentav/virus-scan-sdk-js.AttachmentAVApi

All URIs are relative to *https://eu.developer.attachmentav.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scanAsyncDownloadPost**](AttachmentAVApi.md#scanAsyncDownloadPost) | **POST** /scan/async/download | 
[**scanAsyncS3Post**](AttachmentAVApi.md#scanAsyncS3Post) | **POST** /scan/async/s3 | 
[**scanSyncBinaryPost**](AttachmentAVApi.md#scanSyncBinaryPost) | **POST** /scan/sync/binary | 
[**scanSyncDownloadPost**](AttachmentAVApi.md#scanSyncDownloadPost) | **POST** /scan/sync/download | 
[**scanSyncS3Post**](AttachmentAVApi.md#scanSyncS3Post) | **POST** /scan/sync/s3 | 



## scanAsyncDownloadPost

> scanAsyncDownloadPost(asyncDownloadScanRequest)



Download a file from a remote location (HTTP/HTTPS), scan the file, and post the scan result to your callback URL.

### Example

```javascript
import @attachmentav/virus-scan-sdk-js from '@attachmentav/virus-scan-sdk-js';
let defaultClient = @attachmentav/virus-scan-sdk-js.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @attachmentav/virus-scan-sdk-js.AttachmentAVApi();
let asyncDownloadScanRequest = new @attachmentav/virus-scan-sdk-js.AsyncDownloadScanRequest(); // AsyncDownloadScanRequest | 
apiInstance.scanAsyncDownloadPost(asyncDownloadScanRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asyncDownloadScanRequest** | [**AsyncDownloadScanRequest**](AsyncDownloadScanRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## scanAsyncS3Post

> scanAsyncS3Post(asyncS3ScanRequest)



Download a file from S3, scan the file, and post the scan result to your callback URL. A bucket policy is required to grant attachmentAV access to the S3 objects.

### Example

```javascript
import @attachmentav/virus-scan-sdk-js from '@attachmentav/virus-scan-sdk-js';
let defaultClient = @attachmentav/virus-scan-sdk-js.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @attachmentav/virus-scan-sdk-js.AttachmentAVApi();
let asyncS3ScanRequest = new @attachmentav/virus-scan-sdk-js.AsyncS3ScanRequest(); // AsyncS3ScanRequest | 
apiInstance.scanAsyncS3Post(asyncS3ScanRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asyncS3ScanRequest** | [**AsyncS3ScanRequest**](AsyncS3ScanRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## scanSyncBinaryPost

> ScanResult scanSyncBinaryPost(body)



Upload a file, scan the file, and return the scan result.

### Example

```javascript
import @attachmentav/virus-scan-sdk-js from '@attachmentav/virus-scan-sdk-js';
let defaultClient = @attachmentav/virus-scan-sdk-js.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @attachmentav/virus-scan-sdk-js.AttachmentAVApi();
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

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json


## scanSyncDownloadPost

> ScanResult scanSyncDownloadPost(syncDownloadScanRequest)



Download a file from a remote location (HTTP/HTTPS), scan the file, and return the scan result.

### Example

```javascript
import @attachmentav/virus-scan-sdk-js from '@attachmentav/virus-scan-sdk-js';
let defaultClient = @attachmentav/virus-scan-sdk-js.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @attachmentav/virus-scan-sdk-js.AttachmentAVApi();
let syncDownloadScanRequest = new @attachmentav/virus-scan-sdk-js.SyncDownloadScanRequest(); // SyncDownloadScanRequest | 
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

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## scanSyncS3Post

> ScanResult scanSyncS3Post(syncS3ScanRequest)



Download a file from S3, scan the file, and return the scan result. A bucket policy is required to grant attachmentAV access to the S3 objects.

### Example

```javascript
import @attachmentav/virus-scan-sdk-js from '@attachmentav/virus-scan-sdk-js';
let defaultClient = @attachmentav/virus-scan-sdk-js.ApiClient.instance;
// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new @attachmentav/virus-scan-sdk-js.AttachmentAVApi();
let syncS3ScanRequest = new @attachmentav/virus-scan-sdk-js.SyncS3ScanRequest(); // SyncS3ScanRequest | 
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

[apiKeyAuth](../README.md#apiKeyAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

