import { Sequelize } from 'sequelize';
import { Umzug } from 'umzug';
import { DATABASE_URL } from './config';

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const connectToDatabase = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    await runMigrations();
    console.log('Database connected');
  } catch (err) {
    console.log('Connecting to the database failed', err);
    process.exit(1);
  }
};

const migrationConf = {
  migrations: {
    glob: 'migrations/*.js',
  },
  storage: new Umzug.SequelizeStorage({ sequelize, tableName: 'migrations' }),
  context: sequelize.getQueryInterface(),
  logger: console,
};

const runMigrations = async (): Promise<void> => {
  const migrator = new Umzug(migrationConf);
  const migrations = await migrator.up();
  console.log('Migrations up to date', {
    files: migrations.map((mig) => mig.name),
  });
};

const rollbackMigration = async (): Promise<void> => {
  await sequelize.authenticate();
  const migrator = new Umzug(migrationConf);
  await migrator.down();
  await sequelize.close();
};

export {
  connectToDatabase,
  runMigrations,
  rollbackMigration,
  sequelize,
};
