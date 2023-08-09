/* eslint-disable @typescript-eslint/no-unsafe-argument */
// app.ts

import express from 'express';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());


app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

// Import and use your other route handlers here
import aiRouter from './routes/ais';
import reviewRouter from './routes/reviews';
import sellerRouter from './routes/sellers';
import userRouter from './routes/users';
import newRouter from './routes/news';
import searchRouter from './routes/search';
import filterRouter from './routes/filter';

app.use('/api/ais', aiRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/sellers', sellerRouter);
app.use('/api/users', userRouter);
app.use('/api/news', newRouter);
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
app.use('/api/search', searchRouter);
app.use('/api/filter', filterRouter);

export default app;
