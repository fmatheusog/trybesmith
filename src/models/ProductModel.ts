import connection from './connection';
import IProduct from '../interfaces/Product.interface';

class ProductModel {
  static async getAll() {
    const [allProducts] = await connection.execute('SELECT * FROM Trybesmith.Products');

    return allProducts as IProduct[];
  }
}

export default ProductModel;
