import { Request, Response, NextFunction } from 'express';

import { createOrder as createOrderService } from '../services/order.service';

export async function createOrder(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const order = await createOrderService(req.body);

    return res.status(201).json('deu certo porra');
  } catch (error) {
    next(error);
  }
}
