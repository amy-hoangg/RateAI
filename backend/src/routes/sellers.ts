/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import sellersService from '../services/sellersService';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
type UserForTokenType = {
  username: string;
  id: string;
};

type DecodedToken = UserForTokenType;


const router = express.Router();

router.get('/', async (_req, res) => {
  const allSeller  = await sellersService.getAll();
  res.send(allSeller );
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

    const newSeller  = await sellersService.createNewSeller (req.body, decodedToken.id);
    
    res.send(newSeller );
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
  const seller  = await sellersService.getOneSeller (id);
  if (seller ) {
    res.send(seller );
  } else {
    res.status(404).send('Seller  not found');
  }
});

export default router;
