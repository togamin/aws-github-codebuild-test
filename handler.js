'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'aws-github-codebuild-test 自動デプロイ!!!',
        input: event,
      },
      null,
      2
    ),
  };
};
