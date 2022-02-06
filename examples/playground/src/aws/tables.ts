export const movieTable = {
  TableName: 'Movies',
  KeySchema: [
    {AttributeName: 'year', KeyType: 'HASH'},  // Partition key
    {AttributeName: 'title', KeyType: 'RANGE'}  // Sort key
  ],
  AttributeDefinitions: [
    {AttributeName: 'year', AttributeType: 'N'},
    {AttributeName: 'title', AttributeType: 'S'}
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};