
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost', // Change this to your PostgreSQL server host
  dialect: 'postgres',
  logging: false, // Set this to true if you want to see SQL queries in the console
});

export default sequelize;
