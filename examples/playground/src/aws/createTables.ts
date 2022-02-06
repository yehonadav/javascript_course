import {dynamoDB} from './dynamoDB';
import {movieTable} from './tables';

export const createTables = () => {
  dynamoDB.createTable(movieTable, function(err, data) {
    if (err) {
      console.error('Unable to create table. Error JSON:', JSON.stringify(err, null, 2));
    } else {
      console.log('Created table. Table description JSON:', JSON.stringify(data, null, 2));
    }
  });
};

createTables();
