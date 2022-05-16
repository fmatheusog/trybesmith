import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const ProductRoutes = Router();

ProductRoutes.get('/', ProductController.getAll);

export default ProductRoutes;