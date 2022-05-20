import IProduct from '../interfaces/Product.interface';
import ProductModel from '../models/ProductModel';

class ProductService {
  static async getAll() {
    const allProducts = await ProductModel.getAll();

    return allProducts;
  }
  
  static async create(product: IProduct) {
    const newProduct = await ProductModel.create(product);
    
    return {
      id: newProduct.insertId,
      name: product.name,
      amount: product.amount,
    } as IProduct;
  }
}

export default ProductService;
