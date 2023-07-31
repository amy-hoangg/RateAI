import express from 'express';
import cors from 'cors';

import aiRouter from './routes/ais';
import reviewRouter from  './routes/reviews';

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});