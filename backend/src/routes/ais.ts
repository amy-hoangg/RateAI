import express from 'express';
import aisService from '../services/aisService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(aisService.getAll());
});

router.post('/', (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newAI = aisService.createNewAI(req.body);
    res.send(newAI);
  } 
  catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

router.get('/:id', (req, res) => {
  const id = req.params.id ;
  res.send(aisService.getOneAI(id));
});

export default router;