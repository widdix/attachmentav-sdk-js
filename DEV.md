# Development

## Generate SDK

To generate the SDK use the following command. Don't forget to update the `artifactVersion`.

```
openapi-generator generate -i api.yml -g javascript -o ./sdk --additional-properties=licenseName=MIT,moduleName=@attachmentav/virus-scan-sdk-js,projectName=@attachmentav/virus-scan-sdk-js,projectVersion=0.1.0
```

Then, build the final version.

```
cd sdk
npm run build
```

Check for updates.

```
npm outdated
```

## Publish

```
cd sdk
cp ../README.md .
npm publish --access public