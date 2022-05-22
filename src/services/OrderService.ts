import OrderModel from '../models/OrderModel';
import ProductModel from '../models/ProductModel';

class OrderService {
  static async getAll() {
    const orders = await OrderModel.getAll();
    const products = await ProductModel.getAll();

    return orders.map((o) => {
      const productsIds = products.filter((p) => p.orderId === o.id).map((p) => p.id);
      return {
        ...o,
        productsIds,
      };
    });
  }
}

export default OrderService;
