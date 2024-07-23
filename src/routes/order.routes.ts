import { Router } from 'express';
import { createOrder } from '../controllers/order.controller';

const OrderRoutes = Router();

OrderRoutes.post('/', createOrder);

export default OrderRoutes;
