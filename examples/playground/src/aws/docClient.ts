import {aws} from './config';

export const docClient = new aws.DynamoDB.DocumentClient();
