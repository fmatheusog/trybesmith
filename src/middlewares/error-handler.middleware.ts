import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/app.error';

export default function errorHandler(
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  console.error(err.message);

  return res.status(err.status).json({ message: err.message });
}
