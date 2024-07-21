import { Request, Response, NextFunction } from 'express';

import {
  createProduct as createProductService,
  getAllProducts as getAllProductsService,
  getProductById as getProductByIdService,
  updateProduct as updateProductService,
  deleteProduct as deleteProductService,
} from '../services/product.service';

export async function createProduct(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { name, description, price, imageUrl } = req.body;
    const product = await createProductService({
      name,
      description,
      price,
      imageUrl,
    });

    return res.status(201).json({ product });
  } catch (error) {
    next(error);
  }
}

export async function getAllProducts(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const products = await getAllProductsService();

    return res.status(200).json({ products });
  } catch (error) {
    next(error);
  }
}

export async function getProductById(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { productId } = req.params;
    const product = await getProductByIdService(productId);

    return res.status(200).json({ product });
  } catch (error) {
    next(error);
  }
}

export async function updateProduct(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { productId } = req.params;
    const { name, description, price, imageUrl } = req.body;
    const product = await updateProductService(productId, {
      name,
      description,
      price,
      imageUrl,
    });

    return res.status(200).json({ product });
  } catch (error) {
    next(error);
  }
}

export async function deleteProduct(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { productId } = req.params;
    await deleteProductService(productId);

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
}
