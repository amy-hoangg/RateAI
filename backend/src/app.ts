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
import userRouter from './routes/users';
import sellerRouter from './routes/sellers';
app.use('/api/ais', aiRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/users', userRouter);
app.use('/api/sellers', sellerRouter);



export default app;