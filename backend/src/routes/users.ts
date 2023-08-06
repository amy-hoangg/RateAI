/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import usersService from '../services/usersService';

const router = express.Router();

router.get('/', async (_req, res) => {
  const allUser = await usersService.getAll();
  res.send(allUser);
});


router.post('/', async (req, res) => {
  try {
    const newUser = await usersService.createNewUser(req.body);
    res.send(newUser);
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
  const user = await usersService.getOneUser(id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send('User not found');
  }
});

export default router;