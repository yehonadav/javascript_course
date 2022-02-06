// https://gist.github.com/tojibon/60cf11569dfc4080019f
// https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.01.html
import AWS from 'aws-sdk';

export const aws = AWS;

aws.config.loadFromPath('../../config.json');
aws.config.apiVersions = {
  // dynamodb: '2011-12-05',
  // ec2: '2013-02-01',
  dynamodb: 'latest'
};
