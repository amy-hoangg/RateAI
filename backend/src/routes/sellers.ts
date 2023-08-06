/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import sellersService from '../services/sellersService';

const router = express.Router();

router.get('/', async (_req, res) => {
  const allSeller  = await sellersService.getAll();
  res.send(allSeller );
});


router.post('/', async (req, res) => {
  try {
    const newSeller  = await sellersService.createNewSeller (req.body);
    res.send(newSeller );
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const seller  = await sellersService.getOneSeller (id);
  if (seller ) {
    res.send(seller );
  } else {
    res.status(404).send('Seller  not found');
  }
});

export default router;
