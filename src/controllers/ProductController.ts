import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

class ProductController {
  static async getAll(_req: Request, res: Response) {
    const products = await ProductService.getAll();
    return res.status(200).json(products);
  }

  static async create(req: Request, res: Response) {
    const { name, amount } = req.body;

    const newProduct = await ProductService.create({ name, amount });
    return res.status(201).json(newProduct);
  }
}

export default ProductController;
