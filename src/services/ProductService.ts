import ProductModel from '../models/ProductModel';

class ProductService {
  static async getAll() {
    const allProducts = await ProductModel.getAll();

    return allProducts;
  }
}

export default ProductService;
