// middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface DecodedToken {
  id: string;
  // Add other token properties here if needed
}

const verifyToken = (token: string): DecodedToken | null => {
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET || '') as DecodedToken;
    return decodedToken;
  } catch (error) {
    return null;
  }
};

export const extractUser = (req: Request, res: Response, next: NextFunction) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  const token = authorizationHeader.replace('Bearer ', ''); // Remove the "Bearer " prefix
  const decodedToken = verifyToken(token);

  if (!decodedToken || !decodedToken.id) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  req.user = { id: decodedToken.id }; // Attach user information to the request
  next();
  return;
};
