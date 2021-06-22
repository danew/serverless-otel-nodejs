const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = async () => {
  console.info('Serving lambda request.');

  const result = await s3.listBuckets().promise();

  const response = {
    statusCode: 200,
    body: `Hello lambda - found ${result.Buckets?.length ?? 0} buckets`,
  };
  return response;
};