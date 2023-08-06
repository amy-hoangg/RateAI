/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import aisService from '../services/aisService';

const router = express.Router();

router.get('/', async (_req, res) => {
  const allAI = await aisService.getAll();
  res.send(allAI);
});


router.post('/', async (req, res) => {
  try {
    const newAI = await aisService.createNewAI(req.body);
    res.send(newAI);
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
  const ai = await aisService.getOneAI(id);
  if (ai) {
    res.send(ai);
  } else {
    res.status(404).send('AI not found');
  }
});

export default router;
