var AWS = require('aws-sdk');

var s3 = new AWS.S3();

//bower install aws-sdk-js
var params = {
    Bucket: 'richard-fisk-docker-images',
    Prefix: 'docker/registry/v2/repositories'
};
s3.listObjects(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});


module.exports = {
    
}