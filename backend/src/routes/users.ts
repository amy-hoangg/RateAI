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