import express from 'express';
import sellersService from '../services/sellersService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(sellersService.getAll());
});

router.post('/', (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newSeller = sellersService.createNewSeller(req.body);
    res.send(newSeller);
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
  res.send(sellersService.getOneSeller(id));
});

export default router;

//push data to the server