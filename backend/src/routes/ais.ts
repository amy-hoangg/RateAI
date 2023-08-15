/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express  from 'express';
import aisService from '../services/aisService';
import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

type UserForTokenType = {
  username: string;
  id: string;
};

type DecodedToken = UserForTokenType;

const router = express.Router();

router.get('/', async (_req, res) => {
  const allAI = await aisService.getAll();
  res.send(allAI);
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

    // Use the decoded user information in the aisService.createNewAI function
    const newAI = await aisService.createNewAI(req.body, decodedToken.id);

    res.send(newAI);
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
router.get('/fetch/:id', async (req, res) => {
  const id = req.params.id;
  console.log('ID:', id); // Add this line
  const ai = await aisService.getOneAI(id);
  if (ai) {
    res.send(ai);
  } else {
    res.status(404).send('AI not found');
  }
});

router.patch('/saves/:id', async (req: Request, res: Response) => {
  const aiId = req.params.id;

  try {

        // Extract the token from the authorization header
        const authorizationHeader = req.get('authorization');
    
        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
          return res.status(401).send('Unauthorized');
        }
        const token = authorizationHeader.substring(7);
        // Verify and decode the token
        const decodedToken = jwt.verify(token, process.env.SECRET || " ") as unknown as DecodedToken;


    // Update the saves count for the AI
    const updatedAI = await aisService.updateSaves(aiId, decodedToken.id);

    if (!updatedAI) {
      return res.status(404).json({ error: "AI not found" });
    }

    // Respond with the updated AI
    return res.json(updatedAI); // Add the "return" statement here
  } catch (error) {
    console.error("Error updating AI saves:", error);
    return res.status(500).json({ error: "An error occurred while updating AI saves" });
  }
});

export default router;
