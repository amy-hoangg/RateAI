import { Request, Response, NextFunction } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user: { id: string } | undefined;
  }
}

type ExtractUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export default ExtractUserMiddleware;
