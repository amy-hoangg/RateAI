import express from 'express';
import loginService from '../services/loginService';

const router = express.Router();

router.post('/', async (req, res) => {
  const { user_name, user_password } = req.body;

  if (!user_name|| !user_password) {
    return res.status(400).json({ error: 'Missing credentials' });
  }

  try {
    const token = await loginService.loginUser(user_name, user_password);

    if (!token) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    console.log('Token:', token);
    return res.json({ token }); // Add a return statement here
  } 
  
  catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ error: 'An error occurred while logging in' });
  }
});

export default router;
