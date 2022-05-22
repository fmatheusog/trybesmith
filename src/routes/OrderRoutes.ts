import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const OrderRoutes = Router();

OrderRoutes.get('/', OrderController.getAll);

export default OrderRoutes;
