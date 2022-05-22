import IOrder from '../interfaces/Order.interface';
import connection from './connection';

class OrderModel {
  static async getAll() {
    const [ordersResult] = await connection.execute('SELECT * FROM Trybesmith.Orders');
    return ordersResult as IOrder[];
  }
}

export default OrderModel;
