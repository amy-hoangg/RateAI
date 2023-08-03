import express from 'express';
import cors from 'cors';

import aiRouter from './routes/ais';
import reviewRouter from  './routes/reviews';
import userRouter from './routes/users';
import sellerRouter from './routes/sellers';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3003;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/ais', aiRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/users', userRouter);
app.use('/api/sellers', sellerRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/**
 * // app.ts or index.ts

import User from './user'; // Import all your Sequelize models here

async function startServer() {
  try {
    // Connect to the database
    await sequelize.authenticate();
    console.log('Connected to the database.');

    // Sync Sequelize models with the database
    await sequelize.sync();
    console.log('Sequelize models synchronized with the database.');

    // Start your Express.js server here
    // ... (rest of your server code)
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();

 */