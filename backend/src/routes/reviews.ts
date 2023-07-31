import express from 'express';
import reviewsService from '../services/reviewsService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(reviewsService.getAll());
});

router.post('/', (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newReview = reviewsService.createNewReview(req.body);
    res.send(newReview);
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
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  res.send(reviewsService.getOneReview(id));
});

export default router;