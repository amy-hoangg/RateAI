/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import reviewsService from '../services/reviewsService';
import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';
import { DecodedToken } from '../types';

const router = express.Router();

router.get('/', async (_req, res) => {
  const allReview = await reviewsService.getAll();
  res.send(allReview);
});


router.post('/', async (req: Request, res: Response) => {
  try {
    // Extract the token from the authorization header
    const authorizationHeader = req.get('authorization');
    
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized');
    }
    const token = authorizationHeader.substring(7);
    // Verify and decode the token
    const decodedToken = jwt.verify(token, process.env.SECRET || " ") as unknown as DecodedToken;

    const newReview = await reviewsService.createNewReview(req.body, decodedToken.id);
    res.send(newReview);
    return;
  } 
  catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
    return;
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
