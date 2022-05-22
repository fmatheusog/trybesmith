import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

class OrderController {
  static async getAll(_req: Request, _res: Response) {
    OrderService.getAll();
  }
}

export default OrderController;