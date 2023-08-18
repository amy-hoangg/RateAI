/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import newsService from '../services/newsService';
import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

type UserForTokenType = {
  username: string;
  id: string;
};

type DecodedToken = UserForTokenType;

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


router.patch('/like/:id', async (req: Request, res: Response) => {
  const newsId = req.params.id;

  try {
    // Extract the token from the authorization header
    const authorizationHeader = req.get('authorization');
    
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized');
    }
    const token = authorizationHeader.substring(7);
    console.log('Token:', token); // Add this log
    // Verify and decode the token
    const decodedToken = jwt.verify(token, process.env.SECRET || " ") as unknown as DecodedToken;
    console.log('Decoded Token:', decodedToken); // Add this log

    // Update the saves count for the News
    const updatedNews = await newsService.like(newsId, decodedToken.id);

    if (!updatedNews) {
      return res.status(404).json({ error: "News not found" });
    }

    // Respond with the updated News
    return res.json(updatedNews); // Add the "return" statement here
  } 
  catch (error) {
    console.error("Error like news:", error);
    return res.status(500).json({ error: "An error occurred while liking news" });
  }
});

export default router;
