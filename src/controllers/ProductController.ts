import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

class ProductController {
  static async getAll(_req: Request, res: Response) {
    const products = await ProductService.getAll();
    return res.status(200).json(products);
  }
}

export default ProductController;
