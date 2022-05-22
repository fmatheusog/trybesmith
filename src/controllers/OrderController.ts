import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

class OrderController {
  static async getAll(_req: Request, res: Response) {
    const orders = await OrderService.getAll();

    return res.status(200).json(orders);
  }
}

export default OrderController;