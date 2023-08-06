/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import newsService from '../services/newsService';

const router = express.Router();

router.get('/', async (_req, res) => {
  const allNew = await newsService.getAll();
  res.send(allNew);
});


router.post('/', async (req, res) => {
  try {
    const newNew = await newsService.createNewNew(req.body);
    res.send(newNew);
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
  const onenew = await newsService.getOneNew(id);
  if (onenew) {
    res.send(onenew);
  } else {
    res.status(404).send('New not found');
  }
});

export default router;
