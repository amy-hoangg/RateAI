// src/express.d.ts
import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        // Add other user properties here if needed
      };
    }
  }
}
