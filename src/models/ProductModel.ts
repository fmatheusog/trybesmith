import connection from './connection';
import IProduct from '../interfaces/Product.interface';

class ProductModel {
  static async getAll() {
    const [allProducts] = await connection.execute('SELECT * FROM Trybesmith.Products');

    return allProducts as IProduct[];
  }

  static async create(product: IProduct) {
    const createQuery = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [newProduct] = await connection.execute(createQuery, [product.name, product.amount]);

    return newProduct as { insertId: number };
  }
}

export default ProductModel;
