'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'aws-github-codebuild-test 動作確認',
        input: event,
      },
      null,
      2
    ),
  };
};
