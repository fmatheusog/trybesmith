import { Router } from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller';

const ProductRoutes = Router();

ProductRoutes.post('/', createProduct);
ProductRoutes.get('/', getAllProducts);
ProductRoutes.get('/:productId', getProductById);
ProductRoutes.patch('/:productId', updateProduct);
ProductRoutes.delete('/:productId', deleteProduct);

export default ProductRoutes;
