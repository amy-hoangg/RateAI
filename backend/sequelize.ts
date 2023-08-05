import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const databaseURL = process.env.DATABASE_URL as string;

const sequelize = new Sequelize(databaseURL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    await sequelize.close(); 
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
// Call the main function and handle any uncaught errors at the top level
main().catch((error) => {
    console.error('An uncaught error occurred:', error);
    // Optionally, you can perform some cleanup or exit the application here.
    process.exit(1);
  });
