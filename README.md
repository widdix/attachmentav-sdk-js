# attachmentav-sdk-js

A virus scan SDK for JavaScript. Scan files for viruses, trojans, and other kinds of malware with [attachmentAV](https://attachmentav.com).

## Development

```
openapi-generator generate -i api.yml -g javascript -o ./sdk --additional-properties=projectName=@widdix/attachmentav-sdk-js,projectVersion=0.2.0,licenseName=MIT
```