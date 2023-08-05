import { rollbackMigration } from './db';

rollbackMigration()
  .then(() => {
    console.log('Rollback completed successfully.');
  })
  .catch((error) => {
    console.error('Error during rollback:', error);
  });