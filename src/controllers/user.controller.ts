import { Request, Response, NextFunction } from 'express';

import {
  createUser as createUserService,
  login as loginService,
} from '../services/user.service';

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { name, email, password } = req.body;
    const token = await createUserService({ name, email, password });

    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    const token = await loginService({ email, password });

    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
}
