import express from 'express';
import usersService from '../services/usersService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(usersService.getAll());
});

router.post('/', (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newUser = usersService.createNewUser(req.body);
    res.send(newUser);
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
  res.send(usersService.getOneUser(id));
});

export default router;

//push data to the server


/**
 * // usersRoutes.ts

import express from 'express';
import User from './user'; // Import the User model

const router = express.Router();

// Fetch all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
   
 */