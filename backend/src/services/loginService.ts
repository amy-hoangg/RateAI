/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';

type UserForTokenType = {
  username: string;
  id: string;
};

type TokenType = string;

const loginUser = async (user_name: string, user_password: string): Promise<TokenType | null> => {
  try {
    const user = await User.findOne({ user_name });

    if (!user) {
      return null; // User not found
    }

    const passwordCorrect = await bcrypt.compare(user_password, user.user_password);

    if (!passwordCorrect) {
      return null; // Password doesn't match
    }

    const userForToken: UserForTokenType = {
      username: user.user_name,
      id: user._id.toString(),
    };

    const token = jwt.sign(userForToken, process.env.SECRET || '');

    return token;
  } 
  
  catch (error) {
    console.error('Error logging in user:', error);
    throw error; // Rethrow the error to be caught by the caller
  }
};

export default {
  loginUser,
};
