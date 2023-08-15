import express from 'express';
import subcribeService from '../services/subcribeService';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
      const newSubcriber = await subcribeService.subcribe(req.body);
      res.send(newSubcriber);
    } catch (error: unknown) {
      let errorMessage = 'Something went wrong.';
      if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
      }
      res.status(400).send(errorMessage);
    }
  });

  export default router;
