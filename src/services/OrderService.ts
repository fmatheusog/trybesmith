import OrderModel from '../models/OrderModel';

class OrderService {
  static async getAll() {
    const orders = await OrderModel.getAll();
    return orders;
  }
}

export default OrderService;
