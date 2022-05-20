import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import validateCreateProduct from '../middlewares/validateCreateProduct';

const ProductRoutes = Router();

ProductRoutes.get('/', ProductController.getAll);
ProductRoutes.post('/', validateCreateProduct, ProductController.create);

export default ProductRoutes;