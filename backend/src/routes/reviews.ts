/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import reviewsService from '../services/reviewsService';

const router = express.Router();

router.get('/', async (_req, res) => {
  const allReview = await reviewsService.getAll();
  res.send(allReview);
});


router.post('/', async (req, res) => {
  try {
    const newReview = await reviewsService.createNewReview(req.body);
    res.send(newReview);
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
  const review = await reviewsService.getOneReview(id);
  if (review) {
    res.send(review);
  } else {
    res.status(404).send('Review not found');
  }
});

export default router;
