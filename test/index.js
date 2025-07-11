const attachmentav = require('../sdk/dist');
const fs = require('fs');

var defaultClient = attachmentav.ApiClient.instance;
var apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = process.env.ATTACHMENTAV_API_KEY;

var api = new attachmentav.AttachmentAVApi()
api.scanSyncBinaryPost(fs.readFileSync('index.js'), function(err, data, response) {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    console.log(JSON.stringify(data));
  }
});