import express from 'express';
import subscribeService from '../services/subscribeService';

const router = express.Router();

router.get('/', async (_req, res) => {
    const allSubcribers = await subscribeService.getAll();
    res.send(allSubcribers);
  });

router.post('/', async (req, res) => {
    try {
      const newSubcriber = await subscribeService.subscribe(req.body);
      res.send(newSubcriber);
    } 
    catch (error: unknown) {
      let errorMessage = 'Something went wrong.';
      if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
      }
      res.status(400).send(errorMessage);
    }
  });

  export default router;
