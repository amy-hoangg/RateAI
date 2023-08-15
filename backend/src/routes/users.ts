/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import usersService from '../services/usersService';
import User from "../models/user";
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { DecodedToken } from '../types';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/', async (_req, res) => {
  const allUser = await usersService.getAll();
  res.send(allUser);
});

router.post('/', async (req, res) => {
  try {
    const { user_name, user_firstname, user_lastname, user_email, user_password } = req.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(user_password, saltRounds);

    const newUser = new User({
      user_name,
      user_firstname,
      user_lastname,
      user_email,
      user_password: passwordHash, // Store the hashed password
    });

    const savedUser = await usersService.createNewUser(newUser);
    
    res.send(savedUser);
  } 

  catch (error: unknown) {
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

router.patch("/putoncart/:id", async (req: Request, res: Response) => {
  const aiId = req.params.id;

  try {
    // Extract the token from the authorization header
    const authorizationHeader = req.get("authorization");

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return res.status(401).send("Unauthorized");
    }
    const token = authorizationHeader.substring(7);
    // Verify and decode the token
    const decodedToken = jwt.verify(
      token,
      process.env.SECRET || " "
    ) as unknown as DecodedToken;


    // Update the ai carts for user
    const updatedUser = await usersService.putOnCart(aiId, decodedToken.id);

    return res.json(updatedUser); // Add the "return" statement here
  } 
  catch (error) {
    console.error("Error putting on cart:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while putting on cart" });
  }
});



export default router;